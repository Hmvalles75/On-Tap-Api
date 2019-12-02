# On Tap Server

<img src="./src/images/screenshot.JPG" alt="On Tap Screenshot" width="auto">

server repo: https://github.com/Hmvalles75/On-Tap-Api
client repo: https://github.com/Hmvalles75/On-Tap-client
Live app: https://on-tap-client.hmvalles75.now.sh/

## Installation

clone github repo
install node dependencies, "npm install"
move example.env to .env
create database and replace example names in .env
migrate database, "npm run migrate"
run api, "npm start"

## Endpoints

#### GET '/restaurants'

Returns all the restaurants in area

#### GET '/restaurants/:id'

Returns restaurant by id with info on chosen restaurant

#### GET '/beers'

Returns all beers in database

#### GET '/beer/:id'

Returns beer by id with detailed information of chosen beer

## Technologies Used

HTML5
CSS3
JavaScript

React.js
Node.js
Express
PostgreSQL

Heroku
knex
Chai
Mocha
Supertest
