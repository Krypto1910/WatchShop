function createOrder(req, res) {
    return res.status(201).json({ order: {} });
  }
  
  function getOrdersByFilter(req, res) {
    const filters = [];
    const { favorite, name } = req.query;
  
    if (favorite !== undefined) {
      filters.push(`favorite=${favorite}`);
    }
    if (name) {
      filters.push(`name=${name}`);
    }
  
    console.log(filters.join('&'));
  
    return res.json({ order: [] });
  }
  
  function getOrder(req, res) {
    return res.json({ order: {} });
  }
  
  function updateOrder(req, res) {
    return res.json({ order: {} });
  }
  
  function deleteOrder(req, res) {
    return res.json({
      message: 'Order deleted',
    });
  }
  
  function deleteAllOrders(req, res) {
    return res.json({
      message: 'All orders deleted',
    });
  }
  
  module.exports = {
    getOrdersByFilter,
    deleteAllOrders,
    getOrder,
    createOrder,
    updateOrder,
    deleteOrder,
  };