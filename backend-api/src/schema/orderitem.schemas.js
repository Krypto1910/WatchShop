const { z } = require('zod');

const OrderitemSchema = z.object({
    id: z.coerce.number().int().nonnegative(),
    OrderId: z.coerce.number().int().nonnegative(),
    ProductId: z.coerce.number().int().nonnegative(),
    Quantity: z.coerce.number().int().nonnegative(),
    Price: z.coerce.number().nonnegative(),
});

/**
 * Mostly used for JSdoc annotations
 */
const partialOrderitemSchema = OrderitemSchema.partial();

module.exports = {
    partialOrderitemSchema,
    OrderitemSchema,
};