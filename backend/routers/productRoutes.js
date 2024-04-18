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

const router = express.Router();

router.post("/", authMiddleware, isAdmin, upload.single("image"), addProduct);
router.get("/getallproduct", authMiddleware, isAdmin, getAllProduct);
router.get("/getproduct/:id", authMiddleware, isAdmin, getProduct);
router.put("/update-product/:id", authMiddleware, isAdmin, updateProduct);
router.delete("/delete-product/:id", authMiddleware, isAdmin, deleteProduct);

module.exports = router;
