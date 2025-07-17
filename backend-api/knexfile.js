// require('dotenv').config();

// const { DB_HOST, DB_PORT, DB_USER, DB_PASS, DB_NAME } = process.env;

// /** @type { import("knex").Knex.Config } */

// module.exports = {
//   client: 'pg',
//   connection: {
//     host: DB_HOST,
//     port: DB_PORT,
//     user: DB_USER,
//     password: DB_PASS,
//     database: DB_NAME,
//   },
//   pool: { min: 0, max: 10 },
//   seeds: {
//     directory: './seeds',
//   },
// };

const knex = require("knex");

const db = knex({
  client: "pg",
  connection: {
    host: "localhost", // hoặc 127.0.0.1
    port: 5432, // cổng mặc định PostgreSQL
    user: "postgres", // tài khoản PostgreSQL của bạn
    password: "1",
    database: "WatchShop",
  },
});

module.exports = db;