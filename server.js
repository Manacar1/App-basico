const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const todosRoute = require('./routes/todos');

app.use(express.json());
app.use('/api', todosRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
