const { z } = require('zod');

const productsSchema = z.object({
    id: z.coerce.number().int().nonnegative(),
    Name: z.string().max(255),
    Category: z.string().max(255),
    Description: z.string().max(255),
    Price: z.coerce.number(),
    Quantaty: z.coerce.number(),
    image: z.string().max(255).optional(),
    imageFile: z
    .instanceof(Object)
    .refine((file) => file && file.fieldname === 'imageFile', {
        message: 'Invalid file upload',
    })
    .optional(),
});

/**
 * Mostly used for JSdoc annotations
 */
const partialProductsSchema = productsSchema.partial();

module.exports = {
    productsSchema,
    partialProductsSchema
};