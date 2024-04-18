const User = require("../model/userModel");
const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");

const authMiddleware = asyncHandler(async (req, res, next) => {
  // let token = req?.headers?.authorization?.startsWith("Bearer");
  // console.log("hhhhhhhhhhhhhhhhhhh", token);
  const authHeader = req.headers["authorization"];
  if (req?.headers?.authorization?.startsWith("Bearer")) {
    // if (authHeader) {
    token = req.headers.authorization.split(" ")[1];
    try {
      if (token) {
        const decode = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decode?.id);
        req.user = user;

        next();
      }
    } catch (error) {
      throw new Error("Not Authorized token expired please Login Again");
    }
  } else {
    throw new Error("There Is no Token Attached to header");
  }
});

const isAdmin = asyncHandler(async (req, res, next) => {
  const { role } = req.user;

  if (role !== "admin") {
    throw new Error("You are not a admin");
  } else {
    next();
  }
});
// const isAdmin = asyncHandler(async (req, res, next) => {
//   const user = await User.findById(req.user._id);
//   console.log(user);
//   if (user.role !== "admin") {
//     throw new Error("You are not a admin");
//   } else {
//     next();
//   }
// });

module.exports = { authMiddleware, isAdmin };
