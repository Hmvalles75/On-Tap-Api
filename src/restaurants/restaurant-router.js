const express = require("express");

const RestaurantService = require("./restaurant-service");
const TapService = require("../taps/tap-service");

const restaurantRouter = express.Router();
const jsonBodyParser = express.json();

restaurantRouter.route("/").get((req, res, next) => {
  RestaurantService.getAllRestaurants(req.app.get("db"))
    .then(restaurants => res.json(restaurants))
    .catch(next);
});

restaurantRouter.route("/:id").get((req, res, next) => {
  const restaurantPromise = RestaurantService.getRestaurantById(
    req.app.get("db"),
    req.params.id
  );
  const beersPromise = TapService.getAllBeersByRestId(
    req.app.get("db"),
    req.params.id
  );
  Promise.all([restaurantPromise, beersPromise])
    .then(results => {
      const restaurant = { ...results[0], beers: results[1] };
      if (!restaurant)
        return res
          .status(404)
          .json({ error: "Found no restaurant with that id" });

      return res.json(restaurant);
    })
    .catch(next);
});

module.exports = restaurantRouter;
