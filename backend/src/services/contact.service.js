const { query, checkConnection, inMemoryStore } = require('../database/connection');
const emailService = require('./email.service');

async function createContactSubmission(data) {
  const { name, email, phone, company, message } = data;
  const isConnected = await checkConnection();

  let submission;

  if (isConnected) {
    const text = `
      INSERT INTO contact_submissions (name, email, phone, company, message)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *
    `;
    const params = [name, email, phone || null, company || null, message || null];
    const res = await query(text, params);
    submission = res.rows[0];
  } else {
    // In-memory store fallback
    submission = {
      id: inMemoryStore.contacts.length + 1,
      name,
      email,
      phone: phone || null,
      company: company || null,
      message: message || null,
      created_at: new Date().toISOString(),
    };
    inMemoryStore.contacts.push(submission);
  }

  // ── Send emails (fire concurrently, don't block response on failure) ──
  try {
    await Promise.all([
      emailService.sendAdminNotification({ name, email, phone, company, message }),
      emailService.sendVisitorConfirmation({ name, email }),
    ]);
  } catch (emailErr) {
    // Log the failure but don't fail the entire request –
    // the form data is already persisted.
    console.error('⚠️  Email delivery failed (form data saved):', emailErr.message);
  }

  return submission;
}

async function listContactSubmissions() {
  const isConnected = await checkConnection();

  if (isConnected) {
    const res = await query('SELECT * FROM contact_submissions ORDER BY created_at DESC');
    return res.rows;
  } else {
    return inMemoryStore.contacts;
  }
}

module.exports = {
  createContactSubmission,
  listContactSubmissions,
};
