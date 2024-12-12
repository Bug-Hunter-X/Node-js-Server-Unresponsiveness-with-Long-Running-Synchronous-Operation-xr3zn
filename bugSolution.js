const http = require('http');

const server = http.createServer((req, res) => {
  // Use setImmediate to make the response asynchronous
  setImmediate(() => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World!');
  });
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});