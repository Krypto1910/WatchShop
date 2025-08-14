const express = require("express");
const productsController = require("../controllers/products.controller");
const { methodNotAllowed } = require("../controllers/errors.controller");
const router = express.Router();
const multer = require("multer");
const upload = multer(); 



module.exports.setup = (app) => {
  app.use('/api/v1/products',upload.none(), router);

  router.get('/', productsController.getProduct);
  router.get('/search', productsController.searchProducts)
  router.get('/:id', productsController.getProductById);
};
