function createOrderItem(req, res) {
    return res.status(201).json({ orderitem: {} });
  }
  
  function getOrderItemsByFilter(req, res) {
    const filters = [];
    const { favorite, name } = req.query;
  
    if (favorite !== undefined) {
      filters.push(`favorite=${favorite}`);
    }
    if (name) {
      filters.push(`name=${name}`);
    }
  
    console.log(filters.join('&'));
  
    return res.json({ orderitem: [] });
  }
  
  function getOrderItem(req, res) {
    return res.json({ orderitem: {} });
  }
  
  function updateOrderItem(req, res) {
    return res.json({ orderitem: {} });
  }
  
  function deleteOrderItem(req, res) {
    return res.json({
      message: 'OrderItem deleted',
    });
  }
  
  function deleteAllOrderItems(req, res) {
    return res.json({
      message: 'All OrderItem deleted',
    });
  }
  
  module.exports = {
    getOrderItemsByFilter,
    deleteAllOrderItems,
    getOrderItem,
    createOrderItem,
    updateOrderItem,
    deleteOrderItem,
  };