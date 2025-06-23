const express = require('express');
const cartController = require('../controllers/cart.controller');
const {methodNotAllowed} = require('../controllers/errors.controller');
const {cartSchema} = require('../schema/cart.schemas');
const { z } = require('zod');
const { validateRequest } = require('../middlewares/validator.middleware')

const router = express.Router();

module.exports.setup = (app) => {
  app.use('/api/v1/cart', router);

  router.post(
    '/',
    validateRequest(
      z.object({
        input: cartSchema.omit({ id: true }).strict()
      }),
    ),
    cartController.createCart,
  );

  router.get(
    '/:id',
    validateRequest(
      z.object({
        input: cartSchema.pick({ id: true }).strict(),
      })
    ),
    cartController.getCart,
  )

  router.delete(
    '/:id',
    validateRequest(
      z.object({
        input: cartSchema.pick({ id: true }).strict(),
      })
    ),
    cartController.deleteCart
  );


  router.all('/',methodNotAllowed)
  router.all('/:id',methodNotAllowed)
};