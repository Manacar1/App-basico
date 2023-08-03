

const express = require('express');
const router = express.Router();
const db = require('../db');

// Create
router.post('/todos', (req, res) => {
  const { title, description } = req.body;
  db.query('INSERT INTO todos (title, description) VALUES (?, ?)', [title, description], (err, result) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ message: 'Todo created successfully', id: result.insertId });
  });
});

// Read
router.get('/todos/:id', (req, res) => {
  const id = req.params.id;
  db.query('SELECT * FROM todos WHERE id = ?', [id], (err, result) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    if (result.length === 0) {
      res.status(404).json({ message: 'Todo not found' });
      return;
    }
    res.json(result[0]);
  });
});

// Update
router.put('/todos/:id', (req, res) => {
  const id = req.params.id;
  const { title, description } = req.body;
  db.query('UPDATE todos SET title = ?, description = ? WHERE id = ?', [title, description, id], (err, result) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    if (result.affectedRows === 0) {
      res.status(404).json({ message: 'Todo not found' });
      return;
    }
    res.json({ message: 'Todo updated successfully' });
  });
});

// Delete
router.delete('/todos/:id', (req, res) => {
  const id = req.params.id;
  db.query('DELETE FROM todos WHERE id = ?', [id], (err, result) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    if (result.affectedRows === 0) {
      res.status(404).json({ message: 'Todo not found' });
      return;
    }
    res.json({ message: 'Todo deleted successfully' });
  });
});

module.exports = router;
