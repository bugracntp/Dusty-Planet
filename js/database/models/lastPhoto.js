const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const lastPhotoSchema = new Schema({
  sol: {
    type: String,
    require: true,
  },
  camera: {
    type: Object,
    require: true,
  },
  src: {
    type: String,
    require: true,
  },
  date: {
    type: String,
    require: true,
  },
  rover: {
    type: Array,
    require: true,
  },
});

const lastPhoto = mongoose.model("lastPhoto", lastPhotoSchema);
module.exports = lastPhoto;
