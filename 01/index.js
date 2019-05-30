const {Server} = require('http');
const myHandler = require('./handler');
// ES Modules
const server = new Server();

// res.on('event')
// res.emit('event')

// const emit = server.emit;
// server.emit = (...args) => {
//   console.log(`event: ${args[0]}`);
//   return emit.apply(server, args);
// };

//                500ms     1000ms    1500ms
// tasks queue: [request1, request2, request3]
server.on('request', myHandler);

server.listen(3000);
