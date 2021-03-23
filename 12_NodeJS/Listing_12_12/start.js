const express = require('express');
const path = require('path');

const PORT = 8000;
const HOST = 'localhost';

const app = express();
app.use(express.static('static'));

app.get('/', (request, response) => {
  const pathToFile = path.join(__dirname, 'static', 'html', 'index.html');
  response.sendFile(pathToFile);
});

const server = app.listen(PORT, () => {
  console.log(`Webserver läuft unter http://${HOST}:${PORT}`);
});
