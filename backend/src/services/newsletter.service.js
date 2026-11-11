const { query, canAttemptDb, isConnectionLevelError, inMemoryStore } = require('../database/connection');

async function subscribeEmail(email) {
  const normalizedEmail = email.toLowerCase().trim();

  if (canAttemptDb()) {
    try {
      const text = `
        INSERT INTO newsletter_subscribers (email)
        VALUES ($1)
        ON CONFLICT (email) DO UPDATE SET subscribed_at = CURRENT_TIMESTAMP
        RETURNING *
      `;
      const res = await query(text, [normalizedEmail]);
      return res.rows[0];
    } catch (err) {
      if (!isConnectionLevelError(err)) throw err;
    }
  }

  inMemoryStore.subscribers.add(normalizedEmail);
  return {
    email: normalizedEmail,
    subscribed_at: new Date().toISOString(),
  };
}

async function listSubscribers() {
  if (canAttemptDb()) {
    try {
      const res = await query('SELECT email, subscribed_at FROM newsletter_subscribers ORDER BY subscribed_at DESC');
      return res.rows;
    } catch (err) {
      if (!isConnectionLevelError(err)) throw err;
    }
  }

  return Array.from(inMemoryStore.subscribers).map((email) => ({
    email,
    subscribed_at: new Date().toISOString(),
  }));
}

module.exports = {
  subscribeEmail,
  listSubscribers,
};
