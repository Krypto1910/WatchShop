const express = require('express');
const orderitemsController = require('../controllers/orderitem.controller');
const {methodNotAllowed} = require('../controllers/errors.controller');
const {OrderitemSchema, partialOrderitemSchema} = require('../schema/orderitem.schemas')
const router = express.Router();
const { z } = require('zod');
const { validateRequest } = require('../middlewares/validator.middleware')

module.exports.setup = (app) => {
  app.use('/api/v1/orderitem', router);

  router.get('/', orderitemsController.getOrderItemsByFilter);

  router.post(
    '/',
    validateRequest(
      z.object({
        input: OrderitemSchema.omit({ id: true, ProductId: true}).strict()
      }),
    ),
    orderitemsController.createOrderItem,
  );

  router.delete('/', orderitemsController.deleteAllOrderItems);

  router.get(
    '/:id',
    validateRequest(
      z.object({
        input: OrderitemSchema.pick({ id: true }).strict(),
      })
    ),
    orderitemsController.getOrderItem,
  )

  router.put(
    '/:id',
    [
    validateRequest(
      z.object({
        input: partialOrderitemSchema
      .strict()
      .refine(
    ({ Quantity }) => {
      return Quantity  !== undefined;
          },
            {
              message: 'Input field is required',
            },
          ),
        }),
      ),
    ],
    orderitemsController.updateOrderItem,
  );

  router.delete(
    '/:id',
    validateRequest(
      z.object({
        input: OrderitemSchema.pick({ id: true }).strict(),
      })
    ),
    orderitemsController.deleteOrderItem,
  );


  router.all('/',methodNotAllowed)
  router.all('/:id',methodNotAllowed)
};