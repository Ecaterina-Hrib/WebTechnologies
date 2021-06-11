const mongoose = require('mongoose')
const Schema = new mongoose.Schema({
  name: String,
  url: String,
  descriere: String,
  tags: String,
  age: [String],
  skin: [String],
  day: [String],
  color: [String],
  products:[String],
});
const makeups = mongoose.model("makeups", Schema);
module.exports = makeups;