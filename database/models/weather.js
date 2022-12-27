const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const weatherSchema = new Schema({

  Sol: {
    type: String,
    require: true,
  },
  date: {
    type: String,
    require: true,
  },
  highF: {
    type: String,
    require: true,
  },
  lowF: {
    type: String,
    require: true,
  },
  highC: {
    type: String,
    require: true,
  },
  lowC: {
    type: String,
    require: true,
  },
  per: {
    type: String,
    require: true,
  },
  sr: {
    type: String,
    require: true,
  },
  ss: {
    type: String,
    require: true,
  },
  season: {
    type: String,
    require: true,
  }
});

const Weather = mongoose.model("Weather", weatherSchema);
module.exports = Weather;

