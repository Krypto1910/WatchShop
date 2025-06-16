function createCustomer(req, res) {
    return res.status(201).json({ customer: {} });
  }
  
  function getCustomersByFilter(req, res) {
    const filters = [];
    const { favorite, name } = req.query;
  
    if (favorite !== undefined) {
      filters.push(`favorite=${favorite}`);
    }
    if (name) {
      filters.push(`name=${name}`);
    }
  
    console.log(filters.join('&'));
  
    return res.json({ customer: [] });
  }
  
  function getCustomer(req, res) {
    return res.json({ customer: {} });
  }
  
  function updateCustomer(req, res) {
    return res.json({ customer: {} });
  }
  
  function deleteCustomer(req, res) {
    return res.json({
      message: 'Customer deleted',
    });
  }
  
  function deleteAllCustomers(req, res) {
    return res.json({
      message: 'All customers deleted',
    });
  }
  
  module.exports = {
    getCustomersByFilter,
    deleteAllCustomers,
    getCustomer,
    createCustomer,
    updateCustomer,
    deleteCustomer,
  };