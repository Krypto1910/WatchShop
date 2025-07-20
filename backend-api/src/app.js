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
customersRouter.setup(app)
// orderitemRouter.setup(app)
// ordersRouter.setup(app)
productsRouter.setup(app)

// POST /customer/register
// app.post("/customer/register", async (req, res) => {
//   try {
//     const { name, email, password, phone = null, address = null } = req.body;
//     console.log({ name, email, password });

//     // 1) Validate cơ bản
//     if (!name || !email || !password)
//       return res
//         .status(400)
//         .json({ success: false, message: "Missing required fields" });

//     // 2) Check email trùng
//     const existing = await knex("Customer").where("Email", email).first();
//     if (existing)
//       return res
//         .status(400)
//         .json({ success: false, message: "Customer already exists" });

//     // 3) Hash password
//     const hashed = await bcrypt.hash(password, SALT_ROUNDS);

//     // 4) Insert vào DB – trả lại cột cần thiết
//     const [newCustomer] = await knex("Customer")
//       .insert({
//         Name: name,
//         Email: email,
//         Password: hashed,
//         Phone: phone,
//         Address: address,
//       })
//       .returning(["CustomerID", "Name", "Email"]); // PostgreSQL >= v10

//     // 5) Trả về
//     return res.status(201).json({
//       success: true,
//       message: "Register successfully",
//       customer: newCustomer,
//     });
//   } catch (error) {
//     console.error("Register error:", error);
//     // Unique‑violation chẳng hạn (trường hợp race condition)
//     if (error.code === "23505")
//       return res
//         .status(400)
//         .json({ success: false, message: "Email already exists" });

//     return res.status(500).json({ success: false, message: "Server error" });
//   }
// });

app.use(resourceNotFound);
app.use(handleError);

module.exports = app;
