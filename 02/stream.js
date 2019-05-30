// Readable, Writable
// Transform, Duplex

// Stream1 -> Stream2 -> Stream3

const fs = require('fs');
const zlib = require('zlib');


const stream = fs.createReadStream(__filename);
const transform = zlib.createGzip();

// paused | flowing

// 1.
const streamOut = fs.createWriteStream(`${__filename}.gz`);

// const s1 = stream;
// const s2 = s1.pipe(transform);
// const s3 = s2.pipe(streamOut);

// 2.
// stream.on('data', (chunk) => {});

// 3.
// stream.resume(); || stream.pause();
// stream.resume();

// stream.on('readable', () => {});
// 'error'
// stream.on('error', err => console.log(err));
//
// stream.on('open', () => {
//   console.log('open');
//   // stream.destroy();
// });
//
// stream.on('finish', () => {});
// stream.on('end', () => {
//   console.log('end');
// });
//
// stream.on('close', () => {
//   console.log('close');
// });

transform.on('end', () => console.log('end'));
transform.on('finish', () => console.log('finish'));
transform.on('open', () => console.log('open'));
transform.on('close', () => console.log('close'));
