const Weather = require("./models/weather");
const rovers = require("./models/rovers");
const lastPhoto = require("./models/lastPhoto");
const newPhoto = require("./models/newPhoto");

const mongoose = require("mongoose");
const dbURL =
  "mongodb+srv://nodemongo:123@cluster0.bhxibzc.mongodb.net/?retryWrites=true&w=majority";
mongoose
  .connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => console.log("baglanti kuruldu"))
  .catch((err) => console.log(err));

const weather = new Weather({
  ID: "3",
  sol: "3",
  temp: "68",
  press: "255",
});
weather.save();
