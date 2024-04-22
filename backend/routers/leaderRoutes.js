const express = require("express");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const {
  addLreader,
  getAllleader,
  getLeader,
  updateLeader,
  deleteLeader,
} = require("../controller/leaderController");
const upload = require("../utils/multer");
const { getAllProduct } = require("../controller/productController");
const { uploadPhoto } = require("../middlewares/uploadImages");

const router = express.Router();

router.post(
  "/",

  uploadPhoto.single("image"),
  addLreader
);
router.get("/get-leader/:id", getLeader);
router.get("/get-all-leader", getAllleader);
router.put("/update-leader/:id", updateLeader);
router.delete("/delete-leader/:id", deleteLeader);

module.exports = router;
