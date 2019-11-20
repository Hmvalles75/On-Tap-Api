BEGIN;

INSERT INTO restaurants
    (restaurant_name, street, telephone, hrs)
VALUES
('The Back Abbey', '128 Oberlin Ave', '909-625-2642', '10am - 10pm'),
('Casa Moreno Mexican Bar & Grill', '101 N Indian Hill', '909-447-5000', '11am - 10pm'),
('Eureka!', '580 W First St', '909-445-8879', '10am - 9pm'),
('Tutti Mangia Italian Grill', '102 Harvard Ave', '909-625-4669', '12pm - 10pm'),
('Union On Yale', '232 Yale Ave', '909-833-5104', '10am - 10pm'),
('The Whisper House', '502 W 1st St', '909-625-7733', '11am - 8pm'),
('The Quarter Creole Cuisine', '201 N Indian Hill Blvd', '909-482-2200', '11am - 9pm'),
('Viva Madrid', '225 Yale Ave', '909-624-5500', '11am - 10pm'),
('Dr. Grubbs', '373 W Bonita Ave', '909-621-6200', '11am - 12am'),
('The Meat Cellar', '160 W Foothill Blvd', '909-741-7875', '12pm - 11pm');

INSERT INTO beers (beer_name, brewery, style, abv, country)
VALUES
('Avec Les Bons Voeux', 'Brasserie Dupont', 'Belgian Saison', '9.5%', 'Belgium'),
('Celebrator', 'Privatbrauerei Franz Inselkhammer KG', 'German Doppelbock', '6.7%', 'Germany'),
('De Garre', 'Brouwerji Van Steenberg N.V.', 'Belgian Dark Ale', '11.7%', 'Belgium'),
('Bavik', 'De Brabandere', 'Bohemian Pilsner', '5.2%', 'Belgium'),
('Chimay White', 'Bieres de Chimay', 'Belgian Tripel', '8%', 'Belgium'),
('Tremendous Delerium', 'Elland Brewery', 'English Dark Mild Ale', '4.3%', 'United Kingdom'),
('Black & Blue', 'Brasserie Dupont', 'Belgian Saison', '9.5%', 'Belgium'),
('Green Zebra', 'Founders Brewing Company', 'Leipzig Gose', '4.6%', 'United States'),
('White Russian', 'Sun Up Brewing Co', 'American Imperial Stout', '9.2%', 'United States'),
('Nitro Merlin', 'Firestone Walker Brewing Co', 'English Sweet/Milk Stout', '5.5%', 'United States'),
('La Fin Du Monde', 'Belgian Tripel', 'Unibroue', '9%', 'Canada'),
('Kentucky Brunch Brand Stout', 'Toppling Goliath Brewing Co', 'American Imperial Stout', '12%', 'United States'),
('Abner', 'Hill Farmstead Brewery', 'New England IPA', '8.2%', 'United States'),
('Bourbon County Brand Stout', 'goose Island Beer Co', 'American Imperial Stout', '15.2%', 'United States'),
('Society & Solitude', 'Hill Farmstead', 'New England IPA', '8%', 'United States'),
('Bud Light', 'Anheuser-Busch', 'American Light Lager', '4.2%', 'United States'),
('Stella Artois', 'Stella Artois', 'European Pale Lager', '5%', 'Belgium'),
('Blue Moon Belgian White', 'Coors Brewing Company', 'Belgian Witbier', '5.4%', 'United States'),
('805', 'Firestone Walker Brewing Co', 'American Amber/Red Ale', '4.3%', 'United States'),
('Coors Light', 'Coors Brewing Company', 'American Light Lager', '4.2%', 'United States'),
('Tangerine Wheat', 'Lost Coast Brewery and Cafe', 'Fruit and Field Beer', '5.5%', 'United States'),
('Juicy Banger', 'Station 26 Brewing Co', 'American IPA', '7.4%', 'United States'),
('Hazy Little Thing IPA', 'Sierra Nevada Brewing Co.', 'New England IPA', '6.7%', 'United States'),
('Pyramid Hefeweizen', 'Pyramid Breweries, Inc.', 'German Hefeweizen', '5.2%', 'United States'),
('Big Wave Golden Ale', 'Kona Brewing Co.', 'American Blonde Ale', '4.4%', 'United States'),
('Space Dust', 'Elysian Brewing Company', 'American IPA', '8.2%', 'United States'),
('Sculpin', 'Ballast Point Brewing Company', 'American IPA', '7%', 'United States'),
('Fat Tire Amber Ale', 'New Belgium Brewing Company', 'American Amber / Red Ale', '5.2%', 'United States'),
('Golden Road', 'Golden Road Brewing', 'Fruit and Field Beer', '4%', 'United States'),
('Jacaranda IPA', 'Claremont Craft Ales', 'American IPA', '6.7%', 'United States');

INSERT INTO taps (restaurant, beer)
VALUES
(1, 1), (1, 2), (1, 3), (1, 4), (1, 5), (1, 6),
(2, 16), (2, 17), (2, 18), (2, 19), (2, 20),
(3, 29), (3, 28), (3, 27), (3, 25), (3, 24), (3, 19),
(4, 7), (4, 8), (4, 9), (4, 10), (4, 11),
(5, 13), (5, 14), (5, 15), (5, 16), (5, 17), (5, 18), (5, 19), (5, 20),
(6, 21), (6, 28), (6, 26), (6, 12), (6, 13),
(7, 15), (7, 18), (7, 22), (7, 23), (7, 27), (7, 29), (7, 30),
(8, 8), (8, 18), (8, 28), (8, 20), (8, 15),
(9, 19), (9, 20), (9, 9), (9, 25), (9, 26), (9, 27),
(10, 30), (10, 29), (10, 28), (10, 27), (10, 26), (10, 25), (10, 24), (10, 23);

COMMIT; 