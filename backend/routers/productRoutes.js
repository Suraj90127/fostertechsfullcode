const express = require("express");
const {
  addProduct,
  getAllProduct,
  getProduct,
  updateProduct,
  deleteProduct,
} = require("../controller/productController");
const { isAdmin, authMiddleware } = require("../middlewares/authMiddleware");
const upload = require("../utils/multer");
const { uploadPhoto } = require("../middlewares/uploadImages");

const router = express.Router();

router.post(
  "/",

  uploadPhoto.single("image"),
  addProduct
);
router.get("/getallproduct", getAllProduct);
router.get("/getproduct/:id", getProduct);
router.put("/update-product/:id", updateProduct);
router.delete("/delete-product/:id", deleteProduct);

module.exports = router;
