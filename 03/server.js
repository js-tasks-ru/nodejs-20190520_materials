const http = require('http');
const fs = require('fs');
const zlib = require('zlib');

const server = new http.Server();

server.on('request', (req, res) => {
  switch (req.url) {
    case '/1':
      fs.createReadStream('1.txt').pipe(res);
      break;
    case '/2':
      fs.createReadStream('2.txt').pipe(zlib.createGzip()).pipe(res);
      break;
    case '/image':
      fs.createReadStream('big.png').pipe(zlib.createGzip()).pipe(res);
      break;
    default:
      res.statusCode = 404;
      res.end('not found');
  }
});

module.exports = server;
