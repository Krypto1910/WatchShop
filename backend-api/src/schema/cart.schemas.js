const { z } = require('zod');

const cartSchema = z.object({
    id: z.coerce.number().int().nonnegative(),
    CustomerId: z.coerce.number().int().nonnegative(),
});



module.exports = {
    cartSchema,
};