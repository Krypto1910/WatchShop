const Jsend = require('../jsend');

function createCart(req, res) {
    return res.status(201).json(Jsend.success({ cart: {} }));
  }
  
  function getCart(req, res) {
    return res.json(Jsend.success({ cart: {} }));
  }
  
  function deleteCart(req, res) {
    return res.json(Jsend.success({
      message: 'Cart deleted',
    }));
  }
  
  
  module.exports = {
    getCart,
    createCart,
    deleteCart,
  };