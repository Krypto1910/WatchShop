const express = require('express');
const cors = require('cors');
const Jsend = require('./jsend')

const cartRouter = require('./routes/cart.router');
const customersRouter = require('./routes/customers.router');
const orderitemRouter = require('./routes/orderitem.router');
const ordersRouter = require('./routes/orders.router');
const productsRouter = require('./routes/products.router');
const {
    resourceNotFound,
    handleError,
} = require('./controllers/errors.controller');


const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    return res.json(Jsend.success())
});

cartRouter.setup(app)
customersRouter.setup(app)
orderitemRouter.setup(app)
ordersRouter.setup(app)
productsRouter.setup(app)

app.use(resourceNotFound)
app.use(handleError)

module.exports = app;