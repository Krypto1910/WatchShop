<<<<<<< Updated upstream
const Jsend = require('../jsend');
const knex = require("../../knexfile");

  function createProduct(req, res) {
    return res.status(201).json(Jsend.success({ product: {} }));
  }
  
  
  async function getProduct(req, res) {
    try {
    const products = await knex.select("*").from("Product");
    return res.status(200).json(products);
  } catch (error) {
    console.log("Error", error);
    return res.json({ message: "Error" });
  };
  }

  async function getProductById(req, res) {
=======
// const Jsend = require("../jsend");

// function createProduct(req, res) {
//   return res.status(201).json(Jsend.success({ product: {} }));
// }

// function getProductsByFilter(req, res) {
//   const filters = [];
//   const { category, name } = req.query;

//   if (category !== undefined) {
//     filters.push(`category=${category}`);
//   }
//   if (name) {
//     filters.push(`name=${name}`);
//   }

//   console.log(filters.join("&"));

//   return res.json(Jsend.success({ product: [] }));
// }

// function getProduct(req, res) {
//   return res.json(Jsend.success({ product: {} }));
// }

// function updateProduct(req, res) {
//   return res.json(Jsend.success({ product: {} }));
// }

// function deleteProduct(req, res) {
//   return res.json(
//     Jsend.success({
//       message: "Product deleted",
//     })
//   );
// }

// function deleteAllProducts(req, res) {
//   return res.json(
//     Jsend.success({
//       message: "All products deleted",
//     })
//   );
// }

// module.exports = {
//   getProductsByFilter,
//   deleteAllProducts,
//   getProduct,
//   createProduct,
//   updateProduct,
//   deleteProduct,
// };
const knex = require("../../knexfile");

const getProducts = async (req, res) => {
  try {
    const products = await knex.select("*").from("Product");
    return res.status(200).json(products);
  } catch (error) {
    console.log("Error", error);
    return res.json({ message: "Error" });
  }
};

const getProductById = async (req, res) => {
>>>>>>> Stashed changes
  const { id } = req.params;

  try {
    const product = await knex("Product").where("ProductID", id).first();

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    return res.status(200).json({ product });
  } catch (error) {
    return res.status(500).json({ error: "Internal server error" });
  }
<<<<<<< Updated upstream
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
    deleteAllProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct,
    getProductById,
  };
=======
};
module.exports = {
  getProducts,
  getProductById,
};
>>>>>>> Stashed changes
