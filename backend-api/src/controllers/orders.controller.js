const Jsend = require("../jsend");
const knex = require("../../knexfile");

const createOrder = async (req, res) => {
  const {
    CustomerID,
    Date,
    TotalAmount,
    Status,
    Address,
    PaymentMethod,
    OrderItems,
  } = req.body;

  try {
    // 1. Insert Order, lấy OrderID mới
    const [orderId] = await knex("Order")
      .insert({
        CustomerID,
        Date,
        TotalAmount,
        Status,
        Address,
        PaymentMethod,
      })
      .returning("OrderID");

    // 2. Tạo dữ liệu cho bảng OrderItem
    const orderItemsData = OrderItems.map((item) => ({
      OrderID: orderId.OrderID,
      ProductID: item.ProductID,
      Quantity: item.Quantity,
      UnitPrice: item.UnitPrice,
    }));

    // // 3. Insert các dòng vào OrderItem
    await knex("OrderItem").insert(orderItemsData);

    return res.status(201).json({
      success: true,
      message: "Order created successfully",
      OrderID: orderId,
    });
  } catch (error) {
    console.error("Error creating order:", error);
    return res.status(500).json({
      success: false,
      message: "Error creating order",
    });
  }
};

function getOrder(req, res) {
  return res.json(Jsend.success({ order: {} }));
}

const getOrdersByCustomer = async (req, res) => {
 
  const { customerId } = req.params;

  try {
    const orders = await knex("Order")
      .where("Order.CustomerID", customerId)
      .join("OrderItem", "Order.OrderID", "OrderItem.OrderID")
      .join("Product", "OrderItem.ProductID", "Product.ProductID")
      .select(
        "Order.OrderID",
        "Order.Date",
        "Order.Status",
        "OrderItem.Quantity",
        "OrderItem.UnitPrice",
        "Product.Name as ProductName",
        "Product.Image as ProductImage"
      )
      .orderBy("Order.Date", "desc");
    
      //console.log(orders);
      console.log("Orders result:", orders.length, JSON.stringify(orders, null, 2));


    return res.json(Jsend.success({ orders }));
  } catch (error) {
    console.error("Error fetching orders:", error);
    return res.status(500).json(Jsend.error("Failed to fetch orders"));
  }
};



function updateOrder(req, res) {
  return res.json(Jsend.success({ order: {} }));
}

function deleteOrder(req, res) {
  return res.json(
    Jsend.success({
      message: "Order deleted",
    })
  );
}

function deleteAllOrders(req, res) {
  return res.json(
    Jsend.success({
      message: "All orders deleted",
    })
  );
}

module.exports = {
  deleteAllOrders,
  getOrder,
  createOrder,
  updateOrder,
  deleteOrder,
  getOrdersByCustomer,
};
