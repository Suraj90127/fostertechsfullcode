const mongoose = require("mongoose");
const url = process.env.MONGO_URI;

const dbConnect = () => {
  try {
    const con = mongoose.connect(process.env.MONGODB_URL);
    console.log("Database connection sucessfully");
  } catch (error) {
    console.log("connection error", error);
  }
};

module.exports = dbConnect;
