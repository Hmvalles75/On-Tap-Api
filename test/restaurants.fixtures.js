function makeRestaurantsArray() {
  return [
    {
      id: 1,
      restaurant_name: "Restaurant 1",
      street: "123 First St.",
      telephone: "111-1111",
      hrs: "1pm-1am"
    },
    {
      id: 2,
      restaurant_name: "Restaurant 2",
      street: "234 Second St.",
      telephone: "222-2222",
      hrs: "2pm-2am"
    },
    {
      id: 3,
      restaurant_name: "Restaurant 3",
      street: "345 Third St.",
      telephone: "333-3333",
      hrs: "3pm-3am"
    }
  ];
}

module.exports = {
  makeRestaurantsArray
};
