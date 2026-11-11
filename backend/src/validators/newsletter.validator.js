const { z } = require('zod');

const newsletterSchema = z.object({
  email: z.string().trim().toLowerCase().email('Please enter a valid email address').max(255),
});

module.exports = {
  newsletterSchema,
};
