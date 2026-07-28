require("dotenv").config();

const commonConfig = {
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  dialect: "mysql",

  define: {
    charset: "utf8mb4",
    collate: "utf8mb4_unicode_ci",
  },

  dialectOptions: {
    charset: "utf8mb4",
  },
};

module.exports = {
  development: commonConfig,
  test: commonConfig,
  production: commonConfig,
};
