//todos: Rota para obter todos os todos (tarefas).
//todos/:id: Rota para obter um todo por ID.
//todos: Rota para criar um novo todo.
//todos/:id: Rota para atualizar um todo por ID.
//todos/:id: Rota para excluir um todo por ID.

const express = require('express');
const router = express.Router();
const db = require('../db');

// Rota para obter todos os todos
router.get('/todos', (req, res) => {
  db.query('SELECT * FROM todos', (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(results);
  });
});

// Rota para obter um todo por ID
router.get('/todos/:id', (req, res) => {
  const id = req.params.id;
  db.query('SELECT * FROM todos WHERE id = ?', [id], (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    if (results.length === 0) {
      res.status(404).json({ message: 'Todo not found' });
      return;
    }
    res.json(results[0]);
  });
});

// Rota para criar um novo todo
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

// Rota para atualizar um todo por ID
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

// Rota para excluir um todo por ID
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