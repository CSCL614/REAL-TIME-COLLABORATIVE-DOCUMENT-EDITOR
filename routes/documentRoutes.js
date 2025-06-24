const express = require("express");
const router = express.Router();

let documentContent = "";

// GET document content
router.get("/", (req, res) => {
  res.json({ content: documentContent });
});

// POST updated content
router.post("/", (req, res) => {
  documentContent = req.body.content || "";
  res.status(200).json({ message: "Updated successfully" });
});

// POST /documents
router.post('/documents', async (req, res) => {
  const { userId, title } = req.body;
  const query = "INSERT INTO documents (user_id, title, content) VALUES (?, ?, '')";
  db.query(query, [userId, title], (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ documentId: result.insertId, message: "Document created" });
  });
});

// PUT /documents/:id
router.put('/documents/:id', async (req, res) => {
  const { content } = req.body;
  const documentId = req.params.id;

  const query = "UPDATE documents SET content = ?, updated_at = NOW() WHERE id = ?";
  db.query(query, [content, documentId], (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: "Document updated" });
  });
});

// GET /documents/user/:userId
router.get('/documents/user/:userId', async (req, res) => {
  const userId = req.params.userId;
  const query = "SELECT id, title, created_at, updated_at FROM documents WHERE user_id = ?";
  
  db.query(query, [userId], (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
});

// GET /documents/:id
router.get('/documents/:id', async (req, res) => {
  const documentId = req.params.id;
  const query = "SELECT * FROM documents WHERE id = ?";

  db.query(query, [documentId], (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json(result[0]);
  });
});

module.exports = router;
