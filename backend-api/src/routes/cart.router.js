const express = require('express');
const cartController = require('../controllers/cart.controller');

const router = express.Router();

module.exports.setup = (app) => {
  app.use('/api/v1/cart', router);

  router.post('/', cartController.createCart);
  router.get('/:id', cartController.getCart);
  router.put('/:id', cartController.updateCart);
  router.delete('/:id', cartController.deleteCart);
};