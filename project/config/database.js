const mysql = require("mysql");

const pool = createPool({
  port: 3306,
  host: "localhost",
  user: "root",
  password: "",
  database: "test",
  connectionLimit: 10
});

module.export = pool;

