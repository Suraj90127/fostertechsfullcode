const asyncHandler = require("express-async-handler");
const Product = require("../model/productModel");
const { cloudinaryUploadImg } = require("../utils/Cloudynary");

const addProduct = asyncHandler(async (req, res) => {
  const uploader = await cloudinaryUploadImg(req.file.path);
  console.log(uploader);
  const { name } = req.body;
  const image = req.file;
  console.log("iii", image);
  const findProduct = await Product.findOne({ name });
  console.log(findProduct);
  if (!findProduct) {
    const newProduct = await Product.create(req.body, {
      // image,
    });
    res.status(201).json(newProduct);
  } else {
    res.status(400).json({ message: "product allredy exist" });
  }
});

const getAllProduct = asyncHandler(async (req, res) => {
  try {
    // Retrieve all users from the database
    const product = await Product.find();

    // Send the users as a response
    res.json(product);
  } catch (error) {
    console.error("Error fetching product:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});
const getProduct = asyncHandler(async (req, res) => {
  const productId = req.params.id;
  try {
    // Retrieve all users from the database
    const product = await Product.findById(productId);

    // Send the users as a response
    res.json(product);
  } catch (error) {
    console.error("Error fetching product:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

const updateProduct = asyncHandler(async (req, res) => {
  const productId = req.params.id;
  const updateData = req.body;
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      productId,
      updateData,
      { new: true }
    );

    if (!updatedProduct) {
      // If product not found, return 404 Not Found
      return res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

const deleteProduct = asyncHandler(async (req, res) => {
  const productId = req.params.id;
  try {
    const deletedProduct = await Product.findByIdAndDelete(productId);

    if (!deletedProduct) {
      // If product not found, return 404 Not Found
      return res.status(404).json({ message: "Product not found" });
    }

    // If product found and deleted, return it
    res.status(200).json({
      message: "Product deleted successfully",
      product: deletedProduct,
    });
  } catch (error) {
    console.error("Error deleting product:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = {
  addProduct,
  getAllProduct,
  getProduct,
  updateProduct,
  deleteProduct,
};
