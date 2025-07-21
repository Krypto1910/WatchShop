const express = require('express');
const ordersController = require('../controllers/orders.controller');
const {methodNotAllowed} = require('../controllers/errors.controller');
const {ordersSchema} = require('../schema/orders.schemas')
const { z } = require('zod');
const { validateRequest } = require('../middlewares/validator.middleware')
const router = express.Router();

module.exports.setup = (app) => {
  app.use('/api/v1/orders', router);

  router.get('/', ordersController.getOrdersByFilter);

  router.post('/',ordersController.createOrder,);
  
  router.delete('/', ordersController.deleteAllOrders);

  router.get(
    '/:id',
    validateRequest(
      z.object({
        input: ordersSchema.pick({ CustomerId: true }).strict(),
      })
    ),
    ordersController.getOrder
  )

  router.put('/:id', ordersController.updateOrder);

  router.delete('/:id', ordersController.deleteOrder);
    router.delete(
      '/:id',
      validateRequest(
        z.object({
          input: ordersSchema.pick({ CustomerId: true }).strict(),
        })
      ),
      ordersController.deleteOrder,
    );

  router.all('/',methodNotAllowed)
  router.all('/:id',methodNotAllowed)
};