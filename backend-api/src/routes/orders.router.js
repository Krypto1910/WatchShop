const express = require('express');
const ordersController = require('../controllers/orders.controller');
const {methodNotAllowed} = require('../controllers/errors.controller');

const router = express.Router();

module.exports.setup = (app) => {
  app.use('/api/v1/orders', router);

  router.get('/', ordersController.getOrdersByFilter);
  router.post('/', ordersController.createOrder);
  router.delete('/', ordersController.deleteAllOrders);
  router.get('/:id', ordersController.getOrder);
  router.put('/:id', ordersController.updateOrder);
  router.delete('/:id', ordersController.deleteOrder);
  router.all('/',methodNotAllowed)
  router.all('/:id',methodNotAllowed)
};