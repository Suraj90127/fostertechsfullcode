const { generateToken } = require("../config/jwtToken");
const User = require("../model/userModel");
const asyncHandler = require("express-async-handler");

const createUser = asyncHandler(async (req, res) => {
  const { email } = req.body;
  const findUser = await User.findOne({ email });
  if (!findUser) {
    // create new user
    const newUser = User.create(req.body);
    res.json(req.body);
    console.log(req.body);
  } else {
    // user allReady existe
    throw new Error("User already Exist");
  }
});

// Function to handle user login
const adminLogin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if the user exists
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Check if the password is correct
    const isValidPassword = await user.isPasswordMatched(password);

    if (!isValidPassword) {
      return res.status(401).json({ message: "Invalid password" });
    }

    // At this point, the user is authenticated, you can create a session or generate a JWT token
    // For simplicity, let's just return a success message
    return res.status(200).json({
      message: "Login successful",
      user: user,
      token: generateToken(user?._id),
    });
  } catch (error) {
    console.error("Error during login:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
});

const getAllUser = asyncHandler(async (req, res) => {
  try {
    // Retrieve all users from the database
    const users = await User.find();

    // Send the users as a response
    res.json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

const updateUser = asyncHandler(async (req, res) => {
  // const { _id } = req.params;
  // console.log(_id);
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(updatedUser);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

const deleteUser = async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json({ message: "User deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  createUser,
  adminLogin,
  getAllUser,
  updateUser,
  deleteUser,
};
