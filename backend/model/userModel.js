const mongoose = require("mongoose"); // Erase if already required
const bcrypt = require("bcrypt");

// Declare the Schema of the Mongo model
var userSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    // required: true,
    unique: true,
  },
  role: {
    type: String,
    default: "user",
  },
  mobile: {
    type: Number,
  },
  password: {
    type: String,
    // required: true,
  },
});

// this function is pawweord bcrypt start
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSaltSync(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// this function is pawweord bcrypt end

// password compare function start

userSchema.methods.isPasswordMatched = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};
// password compare function end

//Export the model
module.exports = mongoose.model("User", userSchema);
