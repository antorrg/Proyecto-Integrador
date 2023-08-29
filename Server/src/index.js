const http = require('http');

http.createServer((request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*');
}).listen(3001);