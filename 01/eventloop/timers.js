const fs = require('fs');

// Node.JS = V8 + libUV

// tasks queue = []
// microtasks queue = []
// nextTick = []

console.log('start'); // 1

fs.readFile(__filename, (err, content) => {
  console.log('read file'); // 9
});

setImmediate(() => {
  console.log('immediate'); // 8
});

queueMicrotask(() => {
  console.log('queueMicrotask'); // 6
});

new Promise((resolve) => {
  console.log('promise create'); // 2
  resolve('promise then');
}).then((value) => {
  console.log(value); // 7
});

process.nextTick(() => {
  console.log('nextTick1'); // 4

  process.nextTick(() => {
    console.log('nextTick2'); // 5
  });
});

console.log('end'); // 3
