const { query, checkConnection, inMemoryStore } = require('../database/connection');

async function createContactSubmission(data) {
  const { name, email, phone, service, message } = data;
  const isConnected = await checkConnection();

  if (isConnected) {
    const text = `
      INSERT INTO contact_submissions (name, email, phone, service, message)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *
    `;
    const params = [name, email, phone || null, service || 'Art Direction', message];
    const res = await query(text, params);
    return res.rows[0];
  } else {
    // In-memory store
    const submission = {
      id: inMemoryStore.contacts.length + 1,
      name,
      email,
      phone: phone || null,
      service: service || 'Art Direction',
      message,
      created_at: new Date().toISOString(),
    };
    inMemoryStore.contacts.push(submission);
    return submission;
  }
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
