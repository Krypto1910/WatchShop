const express = require("express");
const cors = require("cors");
const Jsend = require("./jsend");
const path = require("path");
const swaggerUI = require("swagger-ui-express");

const customersRouter = require("./routes/customers.router");
const ordersRouter = require("./routes/orders.router");
const productsRouter = require("./routes/products.router");
const shipInfoRouter = require("./routes/shipInfo.router");
const {
  resourceNotFound,
  handleError,
} = require("./controllers/errors.controller");
const swaggerDocument = require("../docs/openapiSpec.json");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  return res.json(Jsend.success());
});
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocument));
app.use("/public", express.static(path.resolve(__dirname, "../public")));

customersRouter.setup(app)
ordersRouter.setup(app)
productsRouter.setup(app)
shipInfoRouter.setup(app)

app.use(resourceNotFound);
app.use(handleError);

module.exports = app;
