const express = require('express');
const orderitemsController = require('../controllers/orderitem.controller');

const router = express.Router();

module.exports.setup = (app) => {
  app.use('/api/v1/orderitems', router);

  router.get('/', orderitemsController.getOrderItemsByFilter);
  router.post('/', orderitemsController.createOrderItem);
  router.delete('/', orderitemsController.deleteAllOrderItems);
  router.get('/:id', orderitemsController.getOrderItem);
  router.put('/:id', orderitemsController.updateOrderItem);
  router.delete('/:id', orderitemsController.deleteOrderItem);
};