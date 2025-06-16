function createProduct(req, res) {
    return res.status(201).json({ product: {} });
  }
  
  function getProductsByFilter(req, res) {
    const filters = [];
    const { favorite, name } = req.query;
  
    if (favorite !== undefined) {
      filters.push(`favorite=${favorite}`);
    }
    if (name) {
      filters.push(`name=${name}`);
    }
  
    console.log(filters.join('&'));
  
    return res.json({ product: [] });
  }
  
  function getProduct(req, res) {
    return res.json({ product: {} });
  }
  
  function updateProduct(req, res) {
    return res.json({ product: {} });
  }
  
  function deleteProduct(req, res) {
    return res.json({
      message: 'Product deleted',
    });
  }
  
  function deleteAllProducts(req, res) {
    return res.json({
      message: 'All products deleted',
    });
  }
  
  module.exports = {
    getProductsByFilter,
    deleteAllProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct,
  };