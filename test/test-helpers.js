const knex = require("knex");

/**
 * create a knex instance connected to postgres
 * @returns {knex instance}
 */

function makeKnexInstance() {
  return knex({
    client: "pg",
    connection: process.env.TEST_DB_URL
  });
}

function makeRestaurantsArray() {
  return [
    {
      id: 1,
      restaurant_name: "Restaurant 1",
      street: "123 First St.",
      telephone: "111-1111",
      hours: "1pm-1am"
    },
    {
      id: 2,
      restaurant_name: "Restaurant 2",
      street: "234 Second St.",
      telephone: "222-2222",
      hours: "2pm-2am"
    },
    {
      id: 3,
      restaurant_name: "Restaurant 3",
      street: "345 Third St.",
      telephone: "333-3333",
      hours: "3pm-3am"
    }
  ];
}

function makeBeersObject() {
  return (
    {
      id: 1,
      beer_name: "Beer 1",
      brewery: "Brewery 1",
      style: "Style 1",
      abv: "1%",
      country: "Country 1"
    },
    {
      id: 2,
      beer_name: "Beer 2",
      brewery: "Brewery 2",
      style: "Style 2",
      abv: "2%",
      country: "Country 2"
    }
  );
}

function cleanTables(db) {
  return db.transaction(trx =>
    trx
      .raw(
        `TRUNCATE
      'restaurants',
      'beers'`
      )
      .then(() =>
        Promise.all([
          trx.raw(`ALTER SEQUENCE restaurants_id_seq minvalue 0 START WITH 1`),
          trx.raw(`ALTER SEQUENCE beers_id_seq minvalue 0 START WITH 1`),
          trx.raw(`SELECT setval('restaurants_id_seq', 0)`),
          trx.raw(`SELECT setval('beers_id_seq', 0)`)
        ])
      )
  );
}

function seedRestaurants(db, restaurants) {
  return db.into("restaurants").insert(restaurants);
}

function seedBeers(db, beers) {
  return db.into("beers").insert(beers);
}

module.exports = {
  makeKnexInstance,
  makeRestaurantsArray,
  makeBeersObject,
  cleanTables,
  seedRestaurants,
  seedBeers
};
