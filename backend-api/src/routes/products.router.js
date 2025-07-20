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

router.get("/:id", productsController.getProductById);
router.get("/", productsController.getProducts);

<<<<<<< Updated upstream
  router.get('/', productsController.getProduct)

  
  router.post(
    '/',
    validateRequest(
      z.object({
        input: productsSchema.omit({ id: true, image: true }).strict()
      }),
    ),
    productsController.createProduct,
  );
=======
module.exports = router
>>>>>>> Stashed changes

// module.exports.setup = (app) => {

<<<<<<< Updated upstream
  router.get('/:id', productsController.getProductById);

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
=======
//   app.use('/api/v1/products', router);
>>>>>>> Stashed changes

//   router.get('/', productsController.getProductsByFilter);
//   router.get(
//     '/',
//     validateRequest(
//       z.object({
//         input: productsSchema.omit({ id:true }).strict(),
//       })
//     ),
//     productsController.getProductsByFilter
//   );

//   router.post(
//     '/',
//     validateRequest(
//       z.object({
//         input: productsSchema.omit({ id: true, image: true }).strict()
//       }),
//     ),
//     productsController.createProduct,
//   );

//   router.delete('/', productsController.deleteAllProducts);

//   router.get(
//     '/:id',
//     validateRequest(
//       z.object({
//         input: productsSchema.pick({ id: true }).strict(),
//       })
//     ),
//     productsController.getProduct
//   )
//   router.put('/:id', productsController.updateProduct);
//   router.put(
//     '/:id',
//     [
//     validateRequest(
//       z.object({
//         input: partialProductsSchema
//       .omit({ avatar: true })
//       .strict()
//       .refine(
//     ({ Name, Category, Description, Price, Quantity, imageFile }) => {
//       return Name || Category || Description || Price || Quantity   !== undefined || imageFile;
//           },
//             {
//               message: 'At least one field is required',
//             },
//           ),
//         }),
//       ),
//     ],
//     productsController.updateProduct,
//   );

//   router.delete(
//     '/:id',
//     validateRequest(
//       z.object({
//         input: productsSchema.pick({ id: true }).strict(),
//       })
//     ),
//     productsController.deleteProduct
//   );

//   router.all('/',methodNotAllowed)
//   router.all('/:id',methodNotAllowed)
// };
