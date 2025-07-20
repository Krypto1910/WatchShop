const Jsend = require('../jsend');
const knex = require("../../knexfile");
const bcrypt = require('bcrypt');
const SALT_ROUNDS = 10;


async function createCustomer(req, res) {
  try {
    const { name, email, password, phone = null, address = null } = req.body;
    console.log({ name, email, password });

    // 1) Validate cơ bản
    if (!name || !email || !password)
      return res
        .status(400)
        .json({ success: false, message: "Missing required fields" });

    // 2) Check email trùng
    const existing = await knex("Customer").where("Email", email).first();
    if (existing)
      return res
        .status(400)
        .json({ success: false, message: "Customer already exists" });

    // 3) Hash password
    const hashed = await bcrypt.hash(password, SALT_ROUNDS);

    // 4) Insert vào DB – trả lại cột cần thiết
    const [newCustomer] = await knex("Customer")
      .insert({
        Name: name,
        Email: email,
        Password: hashed,
        Phone: phone,
        Address: address,
      })
      .returning(["CustomerID", "Name", "Email"]); // PostgreSQL >= v10

    // 5) Trả về
    return res.status(201).json({
      success: true,
      message: "Register successfully",
      customer: newCustomer,
    });
  } catch (error) {
    console.error("Register error:", error);
    if (error.code === "23505")
      return res
        .status(400)
        .json({ success: false, message: "Email already exists" });

    return res.status(500).json({ success: false, message: "Server error" });
  }
}


  async function getCustomer(req, res) {
      try {
        const { id } = req.params;
        const customer = await knex("Customer").where("CustomerID", id).first();  
          if (!customer) {
            return res.status(404).json({ message: "Customer not found" });
        }
        return res.status(200).json(customer);
      } catch (error) {
        console.log("Error", error);
        return res.json({ message: "Error" });
    };
  }

  async function checkCustomer(req, res) {
        try {
      const { email, password } = req.body;

      // 1) Validate input
      if (!email || !password) {
        return res
          .status(400)
          .json({ success: false, message: "Email and password are required." });
      }

      // 2) Tìm khách hàng theo email
      const customer = await knex("Customer").where("Email", email).first();
      if (!customer) {
        return res
          .status(401)
          .json({ success: false, message: "Invalid email or password." });
      }

      // 3) So sánh mật khẩu với hash
      const match = await bcrypt.compare(password, customer.Password);
      if (!match) {
        return res
          .status(401)
          .json({ success: false, message: "Invalid email or password." });
      }

      // 4) Trả về thông tin khách hàng (không gửi password)
      return res.status(200).json({
        success: true,
        message: "Login successful",
        customer: {
          CustomerID: customer.CustomerID,
          Name: customer.Name,
          Email: customer.Email,
          Phone: customer.Phone,
          Address: customer.Address,
        },
      });
    } catch (error) {
      console.error("Login error:", error);
      return res.status(500).json({ success: false, message: "Server error" });
    }
  }
  
  async function updateCustomer(req, res) {
      try {
        const { id } = req.params;
        const { name, email, password, phone, address } = req.body;

        // Tìm thông tin khác hàng
        const customer = await knex("Customer").where("CustomerID", id).first();  
          if (!customer) {
            return res.status(404).json({ message: "Customer not found" });
        }

        
        const existing = await knex("Customer")
          .where("Email", email)
          .andWhereNot("CustomerID", id)
          .first();
        if (existing) {
          return res.status(400).json({ success: false, message: "Email already in use" });
        }

        // Xây dựng các thông tin được cập nhật
        const updateData = {};
            if (name) updateData.Name = name;
            if (email) updateData.Email = email;
            if (phone) updateData.Phone = phone;
            if (address) updateData.Address = address;
            if (password) {
              const hashed = await bcrypt.hash(password, SALT_ROUNDS);
              updateData.Password = hashed;
            }
        // Cập nhật thông tin
          await knex("Customer")
            .where("CustomerID", id)
            .update(updateData);

        // Trả về thông tin khách hàng được cập nhật
          const updatedCustomer = await knex("Customer")
            .select("CustomerID", "Name", "Email", "Phone", "Address")
            .where("CustomerID", id)
            .first();

          return res.status(200).json({
            success: true,
            message: "Customer updated successfully",
            customer: updatedCustomer,
          })

      } catch (error) {
        console.log("Error", error);
        return res.json({ message: "Error" });
    };
  }
  
async function deleteCustomer(req, res) {
  try {
    const { id } = req.params;

    // Kiểm tra khách hàng có tồn tại
    const customer = await knex("Customer").where("CustomerID", id).first();
    if (!customer) {
      return res.status(404).json(Jsend.fail({ message: "Customer not found" }));
    }

    // Xóa khách hàng
    await knex("Customer").where("CustomerID", id).del();

    return res.json(Jsend.success({
      message: "Customer deleted",
      customerID: id,
    }));
  } catch (error) {
    console.error("Delete error:", error);
    return res.status(500).json(Jsend.error("Server error"));
  }
}

  
async function deleteAllCustomers(req, res) {
  try {

    // Xóa toàn bộ khách hàng
    await knex("Customer").del();

    return res.json(Jsend.success({
      message: "All customers deleted",
    }));
  } catch (error) {
    console.error("Delete all error:", error);
    return res.status(500).json(Jsend.error("Server error"));
  }
}

  
  module.exports = {
    deleteAllCustomers,
    getCustomer,
    createCustomer,
    updateCustomer,
    checkCustomer,
    deleteCustomer,
  };