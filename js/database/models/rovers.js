const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const roverSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  launch_date: {
    type: String,
    require: true,
  },
  landing_date: {
    type: String,
    require: true,
  },
  status: {
    type: String,
    require: true,
  },
  max_sol: {
    type: String,
    require: true,
  },
  max_date: {
    type: String,
    require: true,
  },
  total_photos: {
    type: String,
    require: true,
  },
});

const rovers = mongoose.model("rovers", roverSchema);
module.exports = rovers;
