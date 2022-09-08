const { Pool } = require("pg");
const { db } = require("../../config");

const pool = new Pool({
  // local postgres connection

  // user: db.user,
  // password: db.password,
  // host: db.host,
  // port: db.port,
  // database: db.database,

  // heroku postgres connection

  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

module.exports = pool;
