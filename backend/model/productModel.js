const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
var productSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  subdata: [
    {
      type1: {
        type: String,
      },
      type2: {
        type: String,
      },
      type3: {
        type: String,
      },
      type4: {
        type: String,
      },
      type5: {
        type: String,
      },
      type6: {
        type: String,
      },
      type7: {
        type: String,
      },
      type8: {
        type: String,
      },
      type9: {
        type: String,
      },
    },
  ],
  des: {
    type: String,
  },
  image: {
    filename: String,
    path: String,
  },
});

//Export the model
module.exports = mongoose.model("Product", productSchema);
