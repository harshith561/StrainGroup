const { query, canAttemptDb, isConnectionLevelError, inMemoryStore } = require('../database/connection');
const emailService = require('./email.service');

function saveInMemoryContact({ name, email, phone, company, service, message }) {
  const submission = {
    id: inMemoryStore.contacts.length + 1,
    name,
    email,
    phone: phone || null,
    company: company || service || null,
    message: message || null,
    created_at: new Date().toISOString(),
  };
  inMemoryStore.contacts.push(submission);
  return submission;
}

function dispatchContactEmailsAsync({ name, email, phone, company, service, message }) {
  const emailPayload = {
    name,
    email,
    phone,
    company: company || service || '',
    message,
  };

  void Promise.allSettled([
    emailService.sendAdminNotification(emailPayload),
    emailService.sendVisitorConfirmation(emailPayload),
  ]).then((results) => {
    results.forEach((result, index) => {
      if (result.status === 'rejected') {
        const label = index === 0 ? 'admin notification' : 'visitor confirmation';
        console.error(`⚠️  Email delivery failed (${label}, form data saved):`, result.reason?.message || result.reason);
      }
    });
  });
}

async function createContactSubmission(data) {
  const { name, email, phone, company, service, message } = data;
  let submission = null;

  if (canAttemptDb()) {
    try {
      const text = `
        INSERT INTO contact_submissions (name, email, phone, company, message)
        VALUES ($1, $2, $3, $4, $5)
        RETURNING *
      `;
      const params = [name, email, phone || null, company || service || null, message || null];
      const res = await query(text, params);
      submission = res.rows[0];
    } catch (err) {
      // Handle 001_initial_schema.sql column layout (service NOT NULL, message NOT NULL) without schema changes
      if (err.code === '42703') {
        try {
          const fallbackText = `
            INSERT INTO contact_submissions (name, email, phone, service, message)
            VALUES ($1, $2, $3, $4, $5)
            RETURNING *
          `;
          const serviceValue = String(service || company || 'General Inquiry').slice(0, 100);
          const fallbackRes = await query(fallbackText, [
            name,
            email,
            phone || null,
            serviceValue,
            message || '',
          ]);
          submission = fallbackRes.rows[0];
        } catch (fallbackErr) {
          if (!isConnectionLevelError(fallbackErr)) throw fallbackErr;
        }
      } else if (!isConnectionLevelError(err)) {
        throw err;
      }
    }
  }

  if (!submission) {
    submission = saveInMemoryContact({ name, email, phone, company, service, message });
  }

  // Fire emails in the background so API response returns immediately after persistence
  dispatchContactEmailsAsync({ name, email, phone, company, service, message });

  return submission;
}

async function listContactSubmissions() {
  if (canAttemptDb()) {
    try {
      const res = await query('SELECT * FROM contact_submissions ORDER BY created_at DESC');
      return res.rows;
    } catch (err) {
      if (!isConnectionLevelError(err)) throw err;
    }
  }
  return inMemoryStore.contacts;
}

module.exports = {
  createContactSubmission,
  listContactSubmissions,
};
