const TapService = {
  getAllBeersByRestId(db, restaurant_id) {
    return db("taps")
      .join("beers", "beers.id", "taps.beer")
      .select(["taps.beer as id", "beers.beer_name as name"])
      .where("restaurant", restaurant_id);
  }
};

module.exports = TapService;
