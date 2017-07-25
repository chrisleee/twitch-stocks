import http = require('http');
const port = 3001;

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ 'test': 'output' }));
}).listen(port);
