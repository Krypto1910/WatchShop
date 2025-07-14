const express = require("express");
const cors = require("cors");
const Jsend = require("./jsend");
const path = require("path");
const swaggerUI = require("swagger-ui-express");
const knex = require("../knexfile");
const bcrypt = require("bcrypt"); // npm i bcrypt
const SALT_ROUNDS = 10;

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

app.get("/products/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const product = await knex("Product").where("ProductID", id).first();

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    return res.status(200).json({ product });
  } catch (error) {
    return res.status(500).json({ error: "Internal server error" });
  }
});

app.get("/products", async (req, res) => {
  try {
    const products = await knex.select("*").from("Product");
    return res.status(200).json(products);
  } catch (error) {
    console.log("Error", error);
    return res.json({ message: "Error" });
  }
});

// POST /customer/register
app.post("/customer/register", async (req, res) => {
  try {
    const { name, email, password, phone = null, address = null } = req.body;
    console.log({ name, email, password });

    // 1) Validate cơ bản
    if (!name || !email || !password)
      return res
        .status(400)
        .json({ success: false, message: "Missing required fields" });

    // 2) Check email trùng
    const existing = await knex("Customer").where("Email", email).first();
    if (existing)
      return res
        .status(400)
        .json({ success: false, message: "Customer already exists" });

    // 3) Hash password
    const hashed = await bcrypt.hash(password, SALT_ROUNDS);

    // 4) Insert vào DB – trả lại cột cần thiết
    const [newCustomer] = await knex("Customer")
      .insert({
        Name: name,
        Email: email,
        Password: hashed,
        Phone: phone,
        Address: address,
      })
      .returning(["CustomerID", "Name", "Email"]); // PostgreSQL >= v10

    // 5) Trả về
    return res.status(201).json({
      success: true,
      message: "Register successfully",
      customer: newCustomer,
    });
  } catch (error) {
    console.error("Register error:", error);
    // Unique‑violation chẳng hạn (trường hợp race condition)
    if (error.code === "23505")
      return res
        .status(400)
        .json({ success: false, message: "Email already exists" });

    return res.status(500).json({ success: false, message: "Server error" });
  }
});

// POST /customer/register
app.post("/customer/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // 1) Validate input
    if (!email || !password) {
      return res
        .status(400)
        .json({ success: false, message: "Email and password are required." });
    }

    // 2) Tìm khách hàng theo email
    const customer = await knex("Customer").where("Email", email).first();
    if (!customer) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid email or password." });
    }

    // 3) So sánh mật khẩu với hash
    const match = await bcrypt.compare(password, customer.Password);
    if (!match) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid email or password." });
    }

    // 4) Trả về thông tin khách hàng (không gửi password)
    return res.status(200).json({
      success: true,
      message: "Login successful",
      customer: {
        CustomerID: customer.CustomerID,
        Name: customer.Name,
        Email: customer.Email,
        Phone: customer.Phone,
        Address: customer.Address,
      },
    });
  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({ success: false, message: "Server error" });
  }
});

app.use(resourceNotFound);
app.use(handleError);

module.exports = app;
