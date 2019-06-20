const socketIO = require('socket.io');
const socketRedis = require('socket.io-redis');
const config = require('./config');
const uuid = require('uuid/v4');

const Session = require('./models/Session');
const Message = require('./models/Message');

function socket(server) {
  const io = socketIO(server);
  
  io.adapter(socketRedis(config.redis.uri));
  
  /*
  * untrusted -> 10 seconds
  * 'auth': 'login:password'/'token'
  *   => trusted
  *   => disconnect
  *
  *
  * http request -> token
  *
  * */
  
  io.use((socket, done) => {
    const query = socket.handshake.query;
    console.log(query);
    done();
  });
  
  io.on('connection', socket => {
    // socket.on('message', (msg, payload) => {
    //   socket.emit('message', 'hi!', () => {
    //     console.log('hello');
    //   });
    // });
    socket.broadcast.emit('user connected');
    
    socket.on('disconnect', () => {
      console.log('disconnect');
    });
  });
  
  return io;
}

module.exports = socket;
