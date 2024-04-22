const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
var teamSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  part: {
    type: String,
  },
  about: {
    type: String,
  },
  image: {
    filename: String,
    path: String,
  },
});

//Export the model
module.exports = mongoose.model("Team", teamSchema);
