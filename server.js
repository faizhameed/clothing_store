const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");

if (process.env.NODE_ENV != "production") require("dotenv").config();

const app = express(); // intans new express appl
const port = process.env.PORT || 5000;

app.use(
  bodyParser.json()
); /* any of the requests coming in
 I want you to process their body tag and convert it to Jason so we can
use it. */
app.use(
  bodyParser.urlencoded({ extended: true })
); /* URLencoded as a way for us to make sure that the URL strings were getting in and we're passing

out do not contain things like spaces or symbols right. */

app.use(cors()); //cross origin req

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));

  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.htm"));
  });
}

app.listen(port, error => {
  if (error) throw error;
  console.log(`Server running on Port: ${port}`);
});
