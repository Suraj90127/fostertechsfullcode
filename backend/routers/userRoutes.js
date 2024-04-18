const express = require("express");
const {
  createUser,
  adminLogin,
  getAllUser,
  updateUser,
  deleteUser,
} = require("../controller/userController");

const router = express.Router();

router.post("/register", createUser);
router.post("/admin-login", adminLogin);
router.get("/getuser", getAllUser);
router.put("/updateuser/:id", updateUser);
router.delete("/deleteuser/:id", deleteUser);

module.exports = router;
