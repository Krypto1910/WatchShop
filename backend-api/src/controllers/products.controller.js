const Jsend = require("../jsend");
const knex = require("../../knexfile");

function createProduct(req, res) {
  return res.status(201).json(Jsend.success({ product: {} }));
}

// async function getProduct(req, res) {

//   try {
//     const products = await knex.select("*").from("Product");
//     return res.status(200).json(products);
//   } catch (error) {
//     console.log("Error", error);
//     return res.json({ message: "Error" });
//   };
// }

async function getProduct(req, res) {
  const { category } = req.query;

  try {
    let query = knex.select("*").from("Product");

    if (category) {
      query = query.whereILike("Category", category);
    }

    const products = await query;

    if (products.length === 0) {
      return res.status(404).json(Jsend.error("No products found"));
    }

    return res.status(200).json(Jsend.success({ products }));
  } catch (error) {
    console.error("Error fetching products:", error);
    return res.status(500).json(Jsend.error("Internal server error"));
  }
}

// async function getProduct(req, res) {
//   const { category } = req.query;
//   console.log("Query category:", category); // debug

//   try {
//     let query = knex.select("*").from("Product"); // lowercase table name

//     if (category) {
//       query = query.where("Category", category); // lowercase column name
//     }

//     const products = await query;

//     return res.status(200).json(Jsend.success({ products }));
//   } catch (error) {
//     console.error("Error fetching products:", error);
//     return res.status(500).json(Jsend.error("Internal server error"));
//   }
// }

async function getProductById(req, res) {
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
}

function updateProduct(req, res) {
  return res.json(Jsend.success({ product: {} }));
}

function deleteProduct(req, res) {
  return res.json(
    Jsend.success({
      message: "Product deleted",
    })
  );
}

function deleteAllProducts(req, res) {
  return res.json(
    Jsend.success({
      message: "All products deleted",
    })
  );
}

module.exports = {
  deleteAllProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductById,
};
