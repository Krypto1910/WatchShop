const Jsend = require('../jsend');


function createCustomer(req, res) {
    return res.status(201).json(Jsend.success({ customer: {} }));
  }

  function getCustomer(req, res) {
    return res.json(Jsend.success({ customer: {} }));
  }
  
  function updateCustomer(req, res) {
    return res.json(Jsend.success({ customer: {} }));
  }
  
  function deleteCustomer(req, res) {
    return res.json(Jsend.success({
      message: 'Customer deleted',
    }));
  }
  
  function deleteAllCustomers(req, res) {
    return res.json(Jsend.success({
      message: 'All customers deleted',
    }));
  }
  
  module.exports = {
    deleteAllCustomers,
    getCustomer,
    createCustomer,
    updateCustomer,
    deleteCustomer,
  };