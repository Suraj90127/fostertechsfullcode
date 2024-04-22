const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
var leaderSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  status: {
    type: String,
  },
  exp: {
    type: String,
  },
  part1: {
    type: String,
  },
  part2: {
    type: String,
  },
  part3: {
    type: String,
  },
  part4: {
    type: String,
  },
  part5: {
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
module.exports = mongoose.model("Leader", leaderSchema);
