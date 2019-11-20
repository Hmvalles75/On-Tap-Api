CREATE TABLE IF NOT EXISTS taps (
    restaurant INTEGER REFERENCES restaurants(id) NOT NULL,
    beer INTEGER REFERENCES beers(id) NOT NULL,
    PRIMARY KEY (restaurant, beer)
);