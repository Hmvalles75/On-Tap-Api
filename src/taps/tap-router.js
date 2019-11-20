const express = require("express");
const tapRouter = express.Router();
const jsonBodyParser = express.json();

const TapService = require("./tap-service");

tapRouter.route("/:restaurant_id/beers").get((req, res, next) => {
  TapService.getAllBeersByRestId(req.app.get("db"), req.params.id).then(
    beers => {
      res.json(
        beers
          .map(beer => {
            return beer.beer;
          })
          .catch(next)
      );
    }
  );
});

module.exports = tapRouter;
