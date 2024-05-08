const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
var careerSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  skills: {
    type: String,
  },
  exp: {
    type: String,
  },
  qua: {
    type: String,
  },
  des: {
    type: String,
  },
});

//Export the model
module.exports = mongoose.model("Career", careerSchema);
