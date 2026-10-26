const { z } = require('zod');

const newsletterSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
});

module.exports = {
  newsletterSchema,
};
