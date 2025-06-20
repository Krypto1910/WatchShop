const express = require('express');
const customersController = require('../controllers/customers.controller');
const { methodNotAllowed } = require('../controllers/errors.controller');
const { customersSchema,
        partialContactSchema,
 } = require('../schema/customers.schemas')
const { z } = require('zod');

const router = express.Router();
const { validateRequest } = require('../middlewares/validator.middleware')

module.exports.setup = (app) => {
  app.use('/api/v1/customers', router);


  router.post(
    '/',
    validateRequest(
      z.object({
        input: customersSchema.omit({ id: true, avatar: true }).strict()
      }),
    ),
    customersController.createCustomer,
  );

  router.delete('/', customersController.deleteAllCustomers);


  router.get(
    '/:id',
    validateRequest(
      z.object({
        input: customersSchema.pick({ id: true }).strict(),
      })
    ),
    customersController.getCustomer
  )


  router.put(
    '/:id',
    [
    validateRequest(
      z.object({
        input: partialContactSchema
      .omit({ avatar: true })
      .strict()
      .refine(
    ({ name, password, email, address, phone, avatarFile }) => {
      return name || password || email || address || phone  !== undefined || avatarFile;
          },
            {
              message: 'At least one field is required',
            },
          ),
        }),
      ),
    ],
    customersController.updateCustomer,
  );
  

  router.delete(
    '/:id',
    validateRequest(
      z.object({
        input: customersSchema.pick({ id: true }).strict(),
      })
    ),
    customersController.deleteCustomer
  );

  router.all('/',methodNotAllowed)
  router.all('/:id',methodNotAllowed)
};