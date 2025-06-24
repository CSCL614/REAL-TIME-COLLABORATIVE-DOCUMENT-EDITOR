const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1432580G",
  database: "collaborative_editor",
});

connection.connect((err) => {
  if (err) throw err;
  console.log("✅ Connected to MySQL Database!");
});

module.exports = connection;
