const express = require('express')
const router = express.Router()
const dbo = require("../database/database")

// define the home page route
router.route("/rovers").get(async function (req, res) {
  const dbConnect = dbo.getDb();
  dbConnect
    .collection("rovers")
    .find({}).limit(50)
    .toArray(function (err, result) {
      if (err) {
        res.status(400).send("Error fetching listings!");
     } else {
        res.json(result);
      }
    });
});
// define the about route
router.get('/weathers', (req, res) => {
  const dbConnect = dbo.getDb();
  dbConnect
    .collection("weathers")
    .find({})
    .toArray(function (err, result) {
      if (err) {
        res.status(400).send("Error fetching listings!");
     } else {
        res.json(result);
      }
    });
})

router.get('/photos', (req, res) => {
  const dbConnect = dbo.getDb();
  dbConnect
    .collection("photos")
    .find({})
    .toArray(function (err, result) {
      if (err) {
        res.status(400).send("Error fetching listings!");
     } else {
        res.json(result);
      }
    });
})

module.exports = router