const Jsend = require('../jsend');

function createProduct(req, res) {
    return res.status(201).json(Jsend.success({ product: {} }));
  }
  
  function getProductsByFilter(req, res) {
    const filters = [];
    const { category, name } = req.query;
  
    if (category !== undefined) {
      filters.push(`category=${category}`);
    }
    if (name) {
      filters.push(`name=${name}`);
    }
  
    console.log(filters.join('&'));
  
    return res.json(Jsend.success({ product: [] }));
  }
  
  function getProduct(req, res) {
    return res.json(Jsend.success({ product: {} }));
  }
  
  function updateProduct(req, res) {
    return res.json(Jsend.success({ product: {} }));
  }
  
  function deleteProduct(req, res) {
    return res.json(Jsend.success({
      message: 'Product deleted',
    }));
  }
  
  function deleteAllProducts(req, res) {
    return res.json(Jsend.success({
      message: 'All products deleted',
    }));
  }
  
  module.exports = {
    getProductsByFilter,
    deleteAllProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct,
  };