const { z } = require('zod');

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(7, 'Phone must be at least 7 digits').max(50).optional().or(z.literal('')),
  company: z.string().max(200).optional().or(z.literal('')),
  message: z.string().max(5000).optional().or(z.literal('')),
});

module.exports = {
  contactSchema,
};
