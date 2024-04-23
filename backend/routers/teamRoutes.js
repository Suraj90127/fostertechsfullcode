const express = require("express");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");

const upload = require("../utils/multer");

const {
  addTeam,
  getAllTeam,
  getTeam,
  updateTeam,
  deleteTeam,
} = require("../controller/teamController");
const { uploadPhoto } = require("../middlewares/uploadImages");

const router = express.Router();

router.post("/", uploadPhoto.single("image"), addTeam);
router.get("/get-team/:id", getTeam);
router.get("/get-all-team", getAllTeam);
router.put(
  "/update-team/:id",
  authMiddleware,
  isAdmin,
  uploadPhoto.single("image"),
  updateTeam
);
router.delete("/delete-team/:id", authMiddleware, isAdmin, deleteTeam);

module.exports = router;
