const mongoose = require("mongoose");
const ImageDetailsSchema = new mongoose.Schema(
  {
    image: String,
    name: String,
    address: String,
    oldprice: Number,
    newprice: Number,
    discount: Number,
    productType: String,
  },
  {
    collection: "ImageDetails",
  }
);
const imageModel = mongoose.model("ImageDetails", ImageDetailsSchema);

module.exports = imageModel

