const { query, checkConnection, inMemoryStore } = require('../database/connection');

async function subscribeEmail(email) {
  const isConnected = await checkConnection();

  if (isConnected) {
    const text = `
      INSERT INTO newsletter_subscribers (email)
      VALUES ($1)
      ON CONFLICT (email) DO UPDATE SET subscribed_at = CURRENT_TIMESTAMP
      RETURNING *
    `;
    const res = await query(text, [email.toLowerCase().trim()]);
    return res.rows[0];
  } else {
    inMemoryStore.subscribers.add(email.toLowerCase().trim());
    return {
      email: email.toLowerCase().trim(),
      subscribed_at: new Date().toISOString(),
    };
  }
}

async function listSubscribers() {
  const isConnected = await checkConnection();

  if (isConnected) {
    const res = await query('SELECT email, subscribed_at FROM newsletter_subscribers ORDER BY subscribed_at DESC');
    return res.rows;
  } else {
    return Array.from(inMemoryStore.subscribers).map((email) => ({
      email,
      subscribed_at: new Date().toISOString(),
    }));
  }
}

module.exports = {
  subscribeEmail,
  listSubscribers,
};
