const express = require('express');
const cors = require('cors');

const cartRouter = require('./routes/cart.router');
const customersRouter = require('./routes/customers.router');
const orderitemRouter = require('./routes/orderitem.router');
const ordersRouter = require('./routes/orders.router');
const productsRouter = require('./routes/products.router');


const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  return res.json({
    message: 'ok'
  });
});

cartRouter.setup(app)
customersRouter.setup(app)
orderitemRouter.setup(app)
ordersRouter.setup(app)
productsRouter.setup(app)

module.exports = app;