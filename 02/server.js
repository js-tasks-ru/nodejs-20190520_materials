const http = require('http');
const fs = require('fs');

const server = new http.Server();
//                                    Readable  Writable
server.on('request', async (req,      res) => {
  // const chunks = [];

  // req.on('data', chunk => chunks.push(chunk));
  // req.on('end', () => {
  //   const buffer = Buffer.concat(chunks);
  //   console.log(buffer.toString('utf-8'));
  //
  //   res.end('ok');
  // });
  
  req.pipe(fs.createWriteStream('body.txt'));
  
  const chunks = [];
  
  for await (const chunk of req) {
    chunks.push(chunk);
  }
  
  const buffer = Buffer.concat(chunks);
  console.log(buffer.toString('utf-8'));
  
  res.end('ok');
  
  
  // const stream = fs.createReadStream('big.png');
  // stream.on('open', () => {
  //   res.setHeader('Content-Type', 'image/png');
  // });
  // stream.pipe(res);
});

server.listen(3000);
