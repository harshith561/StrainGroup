const { z } = require('zod');

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().max(50).optional().or(z.literal('')),
  service: z.string().min(2).max(100).default('Art Direction'),
  message: z.string().min(5, 'Message must be at least 5 characters').max(5000),
});

module.exports = {
  contactSchema,
};
