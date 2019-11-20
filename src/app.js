"use strict";

require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");

const app = express();
const { NODE_ENV } = require("./config");

const restaurantRouter = require("./restaurants/restaurant-router");
const beerRouter = require("./beers/beer-router");
const tapRouter = require("./taps/tap-router");

const morganOption = NODE_ENV === "production" ? "tiny" : "common";
app.use(morgan(morganOption));
app.use(helmet());
app.use(cors());

app.use("/api/restaurants", restaurantRouter);
app.use("/api/beers", beerRouter);
app.use("/api/restaurants/:id", tapRouter);

app.get("/", (req, res) => {
  res.send("TEST");
});

app.use(function errorHandler(error, req, res, next) {
  let response;
  if (NODE_ENV === "production") {
    response = { error: { message: "server error" } };
  } else {
    response = { message: error.message, error };
  }
  res.status(500).json(response);
});

module.exports = app;
