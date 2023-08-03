// Importe o módulo Express
const express = require('express');

// Crie uma instância do aplicativo Express
const app = express();

// Defina a porta do servidor
const PORT = process.env.PORT || 3000;

// Rota inicial
app.use(express.json());
app.get('/', (req, res) => {
  res.send('Bem-vindo ao meu aplicativo!');
});

// Inicie o servidor
app.listen(PORT, () => {
  console.log(`Servidor está rodando na porta ${PORT}`);
});
