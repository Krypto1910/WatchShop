const Jsend = require("../jsend");
const knex = require("../../knexfile");


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

async function searchProducts(req, res) {
  const { query } = req.query;

  if (!query || query.trim() === "") {
    return res.status(400).json({ error: "Missing search query" });
  }

  try {
    const products = await knex("Product").whereILike("Name", `%${query}%`).select("ProductID", "Name", "Image").limit(5);

    return res.status(200).json({
      status: "success",
      data: { products }
    });
  } catch (error) {
    console.error("Live search error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

module.exports = {
  getProduct,
  getProductById,
  searchProducts,

};
