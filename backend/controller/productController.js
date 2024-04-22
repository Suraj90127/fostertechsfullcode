const asyncHandler = require("express-async-handler");
const Product = require("../model/productModel");
const {
  cloudinaryUploadImg,
  cloudinaryDeleteImg,
} = require("../utils/Cloudynary");

const addProduct = asyncHandler(async (req, res) => {
  const {
    name,
    type1,
    type2,
    type3,
    type4,
    type5,
    type6,
    type7,
    type8,
    type9,
  } = req.body;
  const image = req.file;
  try {
    const findProduct = await Product.findOne({ name });
    console.log(findProduct);
    if (!findProduct) {
      // const uploader = await cloudinaryUploadImg(req.file.path);

      const newProduct = await Product.create({
        name,
        type1,
        type2,
        type3,
        type4,
        type5,
        type6,
        type7,
        type8,
        type9,
        image,
      });
      res.status(201).json(newProduct);
    } else {
      res.status(400).json({ message: "product allredy exist" });
    }
    res.json(req.file.path);
  } catch (error) {
    res.status(400).json({ message: "Internal server errror", error });
    console.log(error);
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
    res.json({ updateProduct });
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

const deleteImages = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const uploader = cloudinaryDeleteImg(id, "images");
    res.json({ messages: "Delete seccessfully" });
  } catch (error) {
    throw new Error(error);
  }
  // console.log(id);
});

module.exports = {
  addProduct,
  getAllProduct,
  getProduct,
  updateProduct,
  deleteProduct,
  deleteImages,
};
