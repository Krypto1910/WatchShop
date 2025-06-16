const express = require('express');
const customersController = require('../controllers/customers.controller');

const router = express.Router();

module.exports.setup = (app) => {
  app.use('/api/v1/customers', router);


  router.post('/', customersController.createCustomer);
  router.delete('/', customersController.deleteAllCustomers);
  router.get('/:id', customersController.getCustomer);
  router.put('/:id', customersController.updateCustomer);
  router.delete('/:id', customersController.deleteCustomer);
};