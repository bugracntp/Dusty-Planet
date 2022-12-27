const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const MongoClient = require("mongodb").MongoClient;
const dbo = require("./database/database")
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use("/", require("./routes/main"));
// get driver connection

//database
const url =
  "mongodb+srv://mongoDB:1234@cluster0.t9egxor.mongodb.net/?retryWrites=true&w=majority";

dbo.connectToServer(()=>{console.log("baglandi")});

app.listen(port, () => {
  // perform a database connection when server starts

  console.log(`Server is running on port: ${port}`);
});
