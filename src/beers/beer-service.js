const BeerService = {
  getAllBeers(db) {
    return db("beers").select("*");
  },

  getBeerById(db, id) {
    return db("beers")
      .where({ id })
      .first();
  }
};
module.exports = BeerService;
