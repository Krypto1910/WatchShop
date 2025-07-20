const { z } = require('zod');

const customersSchema = z.object({
  id: z.coerce.number().int().nonnegative(),
  name: z.string().max(255).optional(),
  password: z.string().max(255).optional(),
  email: z.string().email().optional(),
  address: z.string().max(255).optional(),
  phone: z.string().max(15).optional(),
});

/**
 * Mostly used for JSdoc annotations
 */
const partialCustomersSchema = customersSchema.partial();

module.exports = {
    customersSchema,
    partialCustomersSchema,
};