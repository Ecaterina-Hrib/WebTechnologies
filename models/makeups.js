const mongoose = require('mongoose')
const Schema = new mongoose.Schema({
  name: String,
  image_path: String,
  url: String,
  descriere: String,
  tags: [String],
  products:[String],
});
const makeups = mongoose.model("makeups", Schema);
module.exports = makeups;