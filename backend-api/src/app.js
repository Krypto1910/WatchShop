const express = require("express");
const cors = require("cors");
const Jsend = require("./jsend");
const path = require("path");
const swaggerUI = require("swagger-ui-express");

const cartRouter = require("./routes/cart.router");
const customersRouter = require("./routes/customers.router");
const orderitemRouter = require("./routes/orderitem.router");
const ordersRouter = require("./routes/orders.router");
const productsRouter = require("./routes/products.router");
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

// cartRouter.setup(app)
// customersRouter.setup(app)
// orderitemRouter.setup(app)
// ordersRouter.setup(app)
// productsRouter.setup(app)

const products = [
  {
    ProductID: 1,
    Name: "Luxury Watch",
    Price: 249.99,
    Image: "watch1.jpeg",
    Category: "Watches",
    Description: "A premium quality luxury watch with leather strap.",
    QuantityAvailable: 10,
  },
  {
    ProductID: 2,
    Name: "Sport Watch",
    Price: 149.99,
    Image: "watch2.jpeg",
    Category: "Watches",
    Description: "Durable and waterproof watch for sports activities.",
    QuantityAvailable: 25,
  },
  {
    ProductID: 3,
    Name: "Classic Watch",
    Price: 89.5,
    Image: "watch3.jpeg",
    Category: "Watches",
    Description: "Elegant design for everyday use.",
    QuantityAvailable: 5,
  },
  {
    ProductID: 4,
    Name: "Smart Watch Pro",
    Price: 299.99,
    Image: "watch4.jpeg",
    Category: "Smartwatches",
    Description: "Advanced smartwatch with fitness tracking and notifications.",
    QuantityAvailable: 15,
  },
  {
    ProductID: 5,
    Name: "Vintage Pocket Watch",
    Price: 199.0,
    Image: "watch2.jpeg",
    Category: "Watches",
    Description: "Classic vintage pocket watch for collectors.",
    QuantityAvailable: 8,
  },
  {
    ProductID: 6,
    Name: "Minimalist Watch",
    Price: 59.99,
    Image: "watch3.jpeg",
    Category: "Watches",
    Description: "Sleek and modern design for a minimalist look.",
    QuantityAvailable: 20,
  },
];
  
app.get("/products/:id", (req, res) => {
  const { id } = req.params;
  const product = products.find((item) => item.ProductID === +id);
  return res.status(200).json({ product });
});
app.get("/products", (req, res) => {
  return res.status(200).json({ products });
});



app.use(resourceNotFound);
app.use(handleError);

module.exports = app;
