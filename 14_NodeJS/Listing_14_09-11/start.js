const http = require('http');
const fs = require('fs');
const path = require('path');

const HOST = 'localhost';
const PORT = 8000;

const requestHandler = (request, response) => {
  console.log(`Angefragte URL: ${request.url}`);
  if (request.url === '/static/html/index.html' || request.url == '/') {
    console.log('Lade HTML-Datei');
    const pathToFile = path.join(__dirname, 'static', 'html', 'index.html');
    fs.readFile(pathToFile, (error, data) => {
      if (error) {
        console.error(error);
        response.writeHead(404);
        response.end('Fehler beim Laden der HTML-Datei');
      } else {
        response.setHeader('Content-Type', 'text/html');
        response.writeHead(200);
        response.end(data.toString());
      }
    });
  } else if (request.url === '/css/styles.css' || request.url === '/static/css/styles.css') {
    console.log('Lade CSS-Datei');
    const pathToFile = path.join(__dirname, 'static', 'css', 'styles.css');
    fs.readFile(pathToFile, (error, data) => {
      if (error) {
        console.error(error);
        response.writeHead(404);
        response.end('Fehler beim Laden der CSS-Datei');
      } else {
        response.setHeader('Content-Type', 'text/css');
        response.writeHead(200);
        response.end(data.toString());
      }
    });
  } else {
    response.writeHead(404);
	response.end('Fehler beim Laden der Datei');
  }
};

const server = http.createServer(requestHandler);

server.listen(PORT, HOST, () => {
  console.log(`Webserver läuft unter http://${HOST}:${PORT}`);
});
