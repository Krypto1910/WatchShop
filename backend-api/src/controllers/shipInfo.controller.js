const knex = require("../../knexfile");

const addNewShipInfo = async (req, res) => {
  try {
    const { name, phone, address, customerID } = req.body;
    console.log("Adding new ship info:", { name, phone, address, customerID });
    // Kiểm tra các field bắt buộc
    if (!name || !phone || !address || !customerID) {
      return res
        .status(400)
        .json({ success: false, message: "Missing required fields" });
    }

    const [insertedID] = await knex("ShipInfo")
      .insert({
        CustomerID: customerID,
        ContactName: name,
        ContactNumber: phone,
        ShippingAddress: address,
      })
      .returning("ShipInfoID"); // only works with PostgreSQL

    return res.status(201).json({
      success: true,
      message: "Ship info added successfully",
      //   shipInfoID: insertedID,
    });
  } catch (error) {
    console.error("Error adding ship info:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

const getShipInfoByCustomerId = async (req, res) => {
  const { customerId } = req.params;
  try {
    const shipInfo = await knex("ShipInfo")
      .where("CustomerID", customerId)
      .select("ShipInfoID", "ContactName", "ContactNumber", "ShippingAddress");
    if (shipInfo.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No ship info found for this customer",
      });
    }
    return res.status(200).json({ success: true, shipInfo });
  } catch (error) {
    console.error("Error fetching ship info:", error);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
};

const deleteShipInfoByCustomerId = async (req, res) => {
  const { customerId, shipInfoId } = req.params;

  try {
    // check if ship info belong to customer
    const deletedRows = await knex("ShipInfo")
      .where({
        ShipInfoID: shipInfoId,
        CustomerID: customerId,
      })
      .del();

    if (deletedRows === 0) {
      return res.status(404).json({
        success: false,
        message: "Ship info not found or does not belong to this customer",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Ship info deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting ship info:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

module.exports = {
  addNewShipInfo,
  getShipInfoByCustomerId,
  deleteShipInfoByCustomerId,
};
