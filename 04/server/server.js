const http = require('http');
const url = require('url');
const path = require('path');
const fs = require('fs');

const server = new http.Server();

// tasks queue: []

server.on('request', (req, res) => {
  const pathname = url.parse(req.url).pathname.slice(1);
  const filepath = path.join(__dirname, 'files', pathname);
  
  
  switch (req.method) {
    case 'GET':
      // stat | access | exists
      // fs.stat(filepath, (err, stat) => {
      //   if (err) {
      //     res.statusCode = 404;
      //     res.end('not found');
      //   } else {
      //   }
      // });
      
      fs.createReadStream(filepath)
        .on('error', err => {
          if (err.code === 'ENOENT') {
            res.statusCode = 404;
            res.end('not found');
          } else {
            res.statusCode = 500;
            res.end('internal error');
          }
        })
        .pipe(res);
      
      break;
      
    case 'POST':
      
      req
        .pipe(fs.createWriteStream(filepath, { flags: 'wx' }))
        .on('error', err => {
          if (err.code === 'EEXIST') {
            res.statusCode = 409;
            res.end('already exists');
          } else {
            res.statusCode = 500;
            res.end('internal error');
          }
        })
        .on('close', () => res.end('ok'));
      
      break;
    
    case 'DELETE':
      
      fs.unlink(filepath, (err) => {
        if (err) {
          if (err.code === 'ENOENT') {
            res.statusCode = 404;
            res.end('file not found');
          } else {
            res.statusCode = 500;
            res.end('internal server error');
          }
        } else {
          res.end('ok');
        }
      });
      
      break;
      
    default:
      res.statusCode = 501;
      res.end('Not implemented');
  }
});

module.exports = server;
