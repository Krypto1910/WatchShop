const Jsend = require('../jsend');



function createOrderItem(req, res) {
    return res.status(201).json(Jsend.success({ orderitem: {} }));
  }
  
  function getOrderItemsByFilter(req, res) {
    const filters = [];
    const { CustomerName } = req.query;
  
    if (CustomerName !== undefined) {
      filters.push(`CustomerName=${CustomerName}`);
    }
  
    return res.json(Jsend.success({ orderitem: [] }));
  }
  
  function getOrderItem(req, res) {
    return res.json(Jsend.success({ orderitem: {} }));
  }
  
  function updateOrderItem(req, res) {
    return res.json(Jsend.success({ orderitem: {} }));
  }
  
  function deleteOrderItem(req, res) {
    return res.json(Jsend.success({
      message: 'OrderItem deleted',
    }));
  }
  
  function deleteAllOrderItems(req, res) {
    return res.json(Jsend.success({
      message: 'All OrderItem deleted',
    }));
  }
  
  module.exports = {
    getOrderItemsByFilter,
    deleteAllOrderItems,
    getOrderItem,
    createOrderItem,
    updateOrderItem,
    deleteOrderItem,
  };