const express = require("express");
const beerRouter = express.Router();
const jsonBodyParser = express.json();

const BeerService = require("./beer-service");

beerRouter.route("/").get((req, res, next) => {
  BeerService.getAllBeers(req.app.get("db"))
    .then(beers => res.json(beers))
    .catch(next);
});

beerRouter.route("/:id").get((req, res, next) => {
  BeerService.getBeerById(req.app.get("db"), req.params.id)
    .then(beer => {
      if (!beer)
        return res.status(404).json({ error: "Found no beer with that id" });
      return res.json(beer);
    })
    .catch(next);
});

module.exports = beerRouter;
