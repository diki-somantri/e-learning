const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../../.env") });

const commonConfig = {
  client: "mysql",
  dialect: "mysql",
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  connection: {
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
  },
  migrations: {
    directory: path.join(__dirname, "../database/migrations"),
    tableName: "migrations",
  },
  seeds: {
    directory: path.join(__dirname, "../database/seeds"),
  },
};

module.exports = {
  development: commonConfig,
  test: commonConfig,
  production: commonConfig,
};
