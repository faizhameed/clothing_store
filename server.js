const express = require("express"); // express frame work as middleware to connect to our backend

const cors = require("cors"); // cross orign assess which helps to make the frontend to connect from different orign to the backend hosted at different orign

const bodyParser = require("body-parser");
const path = require("path");
const compression = require("compression");

if (process.env.NODE_ENV != "production") require("dotenv").config();

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
// we need to add secret key from process .env

const app = express(); // intans new express appl
const port = process.env.PORT || 5000;
app.use(compression());
app.use(
  bodyParser.json()
); /* any of the requests coming in
 I want you to process their body tag and convert it to JSON so we can
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

app.post("/payment", (req, res) => {
  const body = {
    source: req.body.token.id,
    amount: req.body.amount,
    currency: "inr"
  };
  stripe.charges.create(body, (stripeErr, stripeRes) => {
    if (stripeErr) res.status(500).send({ error: stripeErr });
    else res.status(200).send({ success: stripeRes });
  });
});
