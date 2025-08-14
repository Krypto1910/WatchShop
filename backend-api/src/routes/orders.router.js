const express = require("express");
const ordersController = require("../controllers/orders.controller");
const { methodNotAllowed } = require("../controllers/errors.controller");
const { ordersSchema } = require("../schema/orders.schemas");
const { z } = require("zod");
const { validateRequest } = require("../middlewares/validator.middleware");
const router = express.Router();
const multer = require("multer");
const upload = multer(); 

module.exports.setup = (app) => {
  app.use("/api/v1/orders", upload.none(),router);
  
  router.post("/", ordersController.createOrder);
  router.get("/customer/:customerId", ordersController.getOrdersByCustomer);
};
