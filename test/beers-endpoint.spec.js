const { expect } = require("chai");
const knex = require("knex");
const app = require("../src/app");
const { makeBeersArray } = require("./beers.fixtures");

describe("Beers Endpoints", () => {
  let db;

  before("make knex instance", () => {
    db = knex({
      client: "pg",
      connection: process.env.TEST_DB_URL
    });
    app.set("db", db);
  });

  after("disconnect from db", () => db.destroy());

  before("clean the table", () => db("beers").delete());

  afterEach("cleanup", () => db("beers").delete());

  context("Given there are beers in the database", () => {
    const testBeers = makeBeersArray();

    beforeEach("insert restaurants", () => {
      return db.into("beers").insert(testBeers);
    });

    it("GET /api/beers responds with 200 and all of the beers", () => {
      return supertest(app)
        .get("/api/beers")
        .expect(200, testBeers);
    });

    it("GET api/beers/:id responds with 200 and specified beer", () => {
      const beerId = 2;
      const expectedBeer = testBeers[beerId - 1];
      return supertest(app)
        .get(`/api/beers/${beerId}`)
        .expect(200, expectedBeer);
      resolve();
    });
  });
});
