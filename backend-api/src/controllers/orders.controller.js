const Jsend = require('../jsend');

function createOrder(req, res) {
    return res.status(201).json(Jsend.success({ order: {} }));
  }
  
  function getOrdersByFilter(req, res) {
    const filters = [];
    const { CustomerName } = req.query;
  
    if (favorite !== undefined) {
      filters.push(`CustomerName=${CustomerName}`);
    }

    return res.json(Jsend.success({ order: [] }));
  }
  
  function getOrder(req, res) {
    return res.json(Jsend.success({ order: {} }));
  }
  
  function updateOrder(req, res) {
    return res.json(Jsend.success({ order: {} }));
  }
  
  function deleteOrder(req, res) {
    return res.json(Jsend.success({
      message: 'Order deleted',
    }));
  }
  
  function deleteAllOrders(req, res) {
    return res.json(Jsend.success({
      message: 'All orders deleted',
    }));
  }
  
  module.exports = {
    getOrdersByFilter,
    deleteAllOrders,
    getOrder,
    createOrder,
    updateOrder,
    deleteOrder,
  };