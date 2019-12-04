const { expect } = require("chai");
const knex = require("knex");
const app = require("../src/app");
const { makeRestaurantsArray } = require("./restaurants.fixtures");

describe("Restaurants Endpoints", () => {
  let db;

  before("make knex instance", () => {
    db = knex({
      client: "pg",
      connection: process.env.TEST_DB_URL
    });
    app.set("db", db);
  });

  after("disconnect from db", () => db.destroy());

  before("clean the table", () => db("restaurants").delete());

  afterEach("cleanup", () => db("restaurants").delete());

  context("Given there are restaurants in the database", () => {
    const testRestaurants = makeRestaurantsArray();

    beforeEach("insert restaurants", () => {
      return db.into("restaurants").insert(testRestaurants);
    });

    it("GET /api/restaurants responds with 200 and all of the restaurants", () => {
      return supertest(app)
        .get("/api/restaurants")
        .expect(200, testRestaurants);
    });
  });
});
