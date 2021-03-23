const express = require('express');
const path = require('path');

const PORT = 8000;
const HOST = 'localhost';

const app = express();
app.use(express.static('static'));
app.use(express.urlencoded({
  extended: true
}));

app.get('/', (request, response) => {
  const pathToFile = path.join(__dirname, 'static', 'html', 'index.html');
  response.sendFile(pathToFile);
});

app.post('/process-form', (request, response) => {
  const user = request.body;
  console.log(`Vorname: ${user.firstName}`);
  console.log(`Nachname: ${user.lastName}`);
  console.log(`Geburtsdatum: ${user.birthday}`);
  console.log(`E-Mail: ${user.email}`);
  response.status(200).send('Formulardaten erfolgreich übermittelt');
});

const server = app.listen(PORT, () => {
  console.log(`Webserver läuft unter http://${HOST}:${PORT}`);
});
