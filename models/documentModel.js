const db = require("../database/db");

const getDocument = (callback) => {
  db.query("SELECT content FROM documents WHERE id = ?", callback);
};

const saveDocument = (content, callback) => {
  db.query("UPDATE documents SET content = ? WHERE id = ?", [content], callback);
};

module.exports = { getDocument, saveDocument };
