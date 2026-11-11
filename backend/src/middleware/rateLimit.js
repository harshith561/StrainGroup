function createRateLimiter(options = {}) {
  const windowMs = Number(options.windowMs) > 0 ? Number(options.windowMs) : 60 * 1000;
  const max = Number(options.max) > 0 ? Number(options.max) : 60;
  const message = options.message || 'Too many requests, please try again later.';
  const keyGenerator =
    typeof options.keyGenerator === 'function'
      ? options.keyGenerator
      : (req) => req.ip || req.socket?.remoteAddress || 'unknown';

  const hits = new Map();

  function pruneExpired(now) {
    if (hits.size <= 1000) return;
    for (const [key, entry] of hits.entries()) {
      if (now >= entry.resetAt) {
        hits.delete(key);
      }
    }
  }

  return function rateLimitMiddleware(req, res, next) {
    const now = Date.now();
    const key = keyGenerator(req);
    let entry = hits.get(key);

    if (!entry || now >= entry.resetAt) {
      pruneExpired(now);
      entry = { count: 1, resetAt: now + windowMs };
      hits.set(key, entry);
    } else {
      entry.count += 1;
    }

    const remaining = Math.max(0, max - entry.count);
    const resetSeconds = Math.ceil(Math.max(0, entry.resetAt - now) / 1000);

    res.set('RateLimit-Limit', String(max));
    res.set('RateLimit-Remaining', String(remaining));
    res.set('RateLimit-Reset', String(resetSeconds));

    if (entry.count > max) {
      res.set('Retry-After', String(resetSeconds));
      return res.status(429).json({
        success: false,
        message,
      });
    }

    return next();
  };
}

module.exports = {
  createRateLimiter,
};

