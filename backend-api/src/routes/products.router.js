const express = require("express");
const productsController = require("../controllers/products.controller");
const { methodNotAllowed } = require("../controllers/errors.controller");
const {
  productsSchema,
  partialProductsSchema,
} = require("../schema/products.schemas");
const { z } = require("zod");
const { validateRequest } = require("../middlewares/validator.middleware");
const router = express.Router();



module.exports.setup = (app) => {
  app.use('/api/v1/products', router);

  router.post(
    '/',
    validateRequest(
      z.object({
        input: productsSchema.omit({ id: true, image: true }).strict()
      }),
    ),
    productsController.createProduct,
  );


  router.get('/', productsController.getProduct);


  router.put(
    '/:id',
    [
    validateRequest(
      z.object({
        input: partialProductsSchema
      .omit({ avatar: true })
      .strict()
      .refine(
    ({ Name, Category, Description, Price, Quantity, imageFile }) => {
      return Name || Category || Description || Price || Quantity   !== undefined || imageFile;
          },
            {
              message: 'At least one field is required',
            },
          ),
        }),
      ),
    ],
    productsController.updateProduct,
  );

  router.post(
    '/',
    validateRequest(
      z.object({
        input: productsSchema.omit({ id: true, image: true }).strict()
      }),
    ),
    productsController.createProduct,
  );

  router.delete('/', productsController.deleteAllProducts);

  router.get(
    '/:id',
    validateRequest(
      z.object({
        input: productsSchema.pick({ id: true }).strict(),
      })
    ),
    productsController.getProductById
  )
  
  router.delete(
    '/:id',
    validateRequest(
      z.object({
        input: productsSchema.pick({ id: true }).strict(),
      })
    ),
    productsController.deleteProduct
  );

  router.all('/',methodNotAllowed)
  router.all('/:id',methodNotAllowed)
};
