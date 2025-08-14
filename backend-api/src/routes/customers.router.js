const express = require("express");
const customersController = require("../controllers/customers.controller");
const { methodNotAllowed } = require("../controllers/errors.controller");
const { customersSchema } = require("../schema/customers.schemas");
const { z } = require("zod");
const multer = require("multer");
const upload = multer();
const rateLimit = require("express-rate-limit");
const limiter = rateLimit({
  windowMs: 60 * 1000,
  max: 5,
  message: { status: "error", message: "Too many attempts" },
});

const router = express.Router();
const { validateRequest } = require("../middlewares/validator.middleware");

module.exports.setup = (app) => {
  app.use("/api/v1/customers", upload.none(), router);

  router.post("/register", limiter, customersController.createCustomer);

  router.post("/login", limiter, customersController.checkCustomer);

  router.get("/:id", customersController.getCustomer);

  router.put("/:id", customersController.updateCustomer);
};
