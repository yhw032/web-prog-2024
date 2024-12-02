const http = require('http');

const port = 1000;

const server = http.createServer();

server.on('request', (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    
    res.write('<h1>Node.js</h1>');
    res.write('<p>This is a Node.js web server</p>');
    res.end('<p>footer</p>');
    
});

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});