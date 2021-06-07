const mongoose = require('mongoose')
const Schema = new mongoose.Schema({
  image_path: String,
  name: String,
  url: String,
  descriere: String,
  type: String,
  age: [String],
  skin: [String],
  day: [String],
  color: [String],
});
const product = mongoose.model("product", Schema);
module.exports = product;
