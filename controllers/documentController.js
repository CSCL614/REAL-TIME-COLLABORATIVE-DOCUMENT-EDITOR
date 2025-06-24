const { getDocument, saveDocument } = require("../models/documentModel");

const fetchDocument = (req, res) => {
  getDocument((err, result) => {
    if (err) res.status(500).send(err);
    else res.json(result[0]);
  });
};

const updateDocument = (req, res) => {
  saveDocument(req.body.content, (err) => {
    if (err) res.status(500).send(err);
    else res.send("Document saved successfully!");
  });
};

module.exports = { fetchDocument, updateDocument };
