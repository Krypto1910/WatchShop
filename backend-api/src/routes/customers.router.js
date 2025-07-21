const express = require('express');
const customersController = require('../controllers/customers.controller');
const { methodNotAllowed } = require('../controllers/errors.controller');
const { customersSchema,
        partialCustomersSchema,
 } = require('../schema/customers.schemas')
const { z } = require('zod');

const router = express.Router();
const { validateRequest } = require('../middlewares/validator.middleware')

module.exports.setup = (app) => {
  app.use('/api/v1/customers', router);

  router.post('/register', customersController.createCustomer);

  router.post(
    '/login',
    validateRequest(
      z.object({
        input: customersSchema.pick({ email: true, password: true }).strict()
      })
    ),
    customersController.checkCustomer,
  );

  router.get(
    '/:id',
    validateRequest(
      z.object({
        params: customersSchema.pick({ id: true }).strict(),
      })
    ),
    customersController.getCustomer
  );


  router.put('/:id',customersController.updateCustomer);
  

  router.delete(
    '/:id',
    validateRequest(
      z.object({
        params: customersSchema.pick({ id: true }).strict(),
      })
    ),
    customersController.deleteCustomer
  );

    router.delete(
    '/',
    customersController.deleteAllCustomers
  );

  router.all('/',methodNotAllowed)
  router.all('/:id',methodNotAllowed)
};