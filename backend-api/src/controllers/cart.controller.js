function createCart(req, res) {
    return res.status(201).json({ cart: {} });
  }
  
  function getCart(req, res) {
    return res.json({ cart: {} });
  }
  
  function updateCart(req, res) {
    return res.json({ cart: {} });
  }
  
  function deleteCart(req, res) {
    return res.json({
      message: 'Cart deleted',
    });
  }
  
  
  module.exports = {
    getCart,
    createCart,
    updateCart,
    deleteCart,
  };