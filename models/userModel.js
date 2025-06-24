const db = require("../database/db");

const getUsers = (callback) => {
  db.query("SELECT * FROM users", callback);
};

const findUserByUsername = (username) => {
  return new Promise((resolve, reject) => {
    db.query("SELECT * FROM users WHERE username = ?", [username], (err, results) => {
      if (err) reject(err);
      else resolve(results[0]);
    });
  });
};

const createUser = (username, passwordHash) => {
  return new Promise((resolve, reject) => {
    db.query("INSERT INTO users (username, password) VALUES (?, ?)", [username, passwordHash], (err, result) => {
      if (err) reject(err);
      else resolve(result);
    });
  });
};

module.exports = { getUsers, findUserByUsername, createUser };
