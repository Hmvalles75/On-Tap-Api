const RestaurantService = {
  getAllRestaurants(db) {
    return db("restaurants").select("*");
  },

  getRestaurantById(db, id) {
    return db("restaurants")
      .where({ id })
      .first();
  }
};
module.exports = RestaurantService;
