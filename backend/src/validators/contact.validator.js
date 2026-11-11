const { z } = require('zod');

const optionalTrimmed = (maxLen) =>
  z.string().trim().max(maxLen).optional().or(z.literal(''));

const contactSchema = z.object({
  name: z.string().trim().min(2, 'Name must be at least 2 characters').max(100),
  email: z.string().trim().toLowerCase().email('Please enter a valid email address').max(255),
  phone: z
    .string()
    .trim()
    .max(50)
    .refine(
      (val) => {
        if (!val) return true;
        if (!/^\+?[\d\s().-]+$/.test(val)) return false;
        const digits = val.replace(/\D/g, '');
        return digits.length >= 7 && digits.length <= 15;
      },
      { message: 'Phone must contain 7 to 15 valid digits' }
    )
    .optional()
    .or(z.literal('')),
  company: optionalTrimmed(200),
  service: optionalTrimmed(100),
  message: optionalTrimmed(5000),
});

module.exports = {
  contactSchema,
};
