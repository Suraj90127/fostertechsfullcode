const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
var contactSchema = new mongoose.Schema({
  fname: {
    type: String,
    required: true,
  },
  lname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },

  message: {
    type: String,
  },
});

//Export the model
module.exports = mongoose.model("Contact", contactSchema);
