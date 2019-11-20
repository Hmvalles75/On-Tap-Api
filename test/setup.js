process.env.TZ = "UCT";
process.env.NODE_ENV = "test";
process.env.DATABASE_URL = "postgresql://postgres@localhost/on_tap";
const { expect } = require("chai");
const supertest = require("supertest");

require("dotenv").config();

const { expect } = require("chai");
const supertest = require("supertest");

global.expect = expect;
global.supertest = supertest;
