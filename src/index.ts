import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, TS Node API!');
});

app.listen(port, () => {
  console.log(`API rodando em http://localhost:${port}`);
});