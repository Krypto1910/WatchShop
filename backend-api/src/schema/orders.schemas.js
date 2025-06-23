const { z } = require('zod');

const getCurrentDate = () => new Date(); //YYYY/MM/DD/Time

const ordersSchema = z.object({
    id: z.coerce.number().int().nonnegative(),
    CustomerId: z.coerce.number().int().nonnegative(),
    Date: z.coerce.date().default(() => getCurrentDate()),
    TotalAmount: z.number().nonnegative(),
});


module.exports = {
    ordersSchema,
};