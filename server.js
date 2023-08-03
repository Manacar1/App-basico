const express = require('express');
const app = express();
const db = require('C:\\Users\\INTEL\\Documents\\GitHub\\App-basico\\db');

const PORT = process.env.PORT || 3000;

app.use(express.json());

// Rota inicial
app.get('/', (req, res) => {
  res.send('Bem-vindo ao meu aplicativo!');
});

// Use as rotas do arquivo todos.js
const todosRoute = require('./routes/todos');
app.use('/api', todosRoute);

app.listen(PORT, () => {
  console.log(`Servidor está rodando na porta ${PORT}`);
});
