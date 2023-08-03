const express = require('express');
const app = express();
const db = require('Documents\GitHub\App-basico\db.js'); // Caminho para o arquivo db.js que você criou

const PORT = process.env.PORT || 3000;

app.use(express.json());

// Rota inicial
app.get('/', (req, res) => {
  res.send('Bem-vindo ao meu aplicativo!');
});

app.listen(PORT, () => {
  console.log(`Servidor está rodando na porta ${PORT}`);
});
