const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
var applyUserSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  mobile: {
    type: String,
  },
  skills: {
    type: String,
  },
  exp: {
    type: String,
  },
  pdf: {
    filename: String, // You might want to store the filename
    data: Buffer, // Binary data of the PDF file
  },
});

//Export the model
module.exports = mongoose.model("Applyuser", applyUserSchema);
