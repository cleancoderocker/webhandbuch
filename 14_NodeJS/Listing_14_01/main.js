// Include module
const http = require('http');
// Define constants
const HOST = 'localhost';
const PORT = 8000;
// Request handler that accepts HTTP requests
const requestHandler = (request, response) => {
  // Define HTTP response header
  response.writeHead(200, {
    'Content-Type': 'text/plain',
  });
  // Define HTTP response body
  response.write('Hello world');
  // Exit HTTP and submit
  response.end();
};
// Initialize HTTP server with request handler
const server = http.createServer(requestHandler);
// Start HTTP server
server.listen(PORT, HOST, () => {
  // HTTP server started
  console.log(`Web server running at http://${HOST}:${PORT}`);
});