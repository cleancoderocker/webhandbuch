// Modul einbinden
const http = require('http');

// Konstanten definieren
const HOST = 'localhost';
const PORT = 8000;

// Request-Handler, der HTTP-Anfragen entgegennimmt
const requestHandler = (request, response) => {
  // HTTP Response-Header definieren
  response.writeHead(200, {
    'Content-Type': 'text/plain',
  });
  // HTTP Response-Body definieren
  response.write('Hallo Welt');
  // HTTP beenden und abschicken
  response.end();
};

// HTTP-Server mit Request-Handler initialisieren
const server = http.createServer(requestHandler);

// HTTP-Server starten
server.listen(PORT, HOST, () => {
  // HTTP-Server gestartet
  console.log(`Webserver läuft unter http://${HOST}:${PORT}`);
});
