// https://github.com/nodejs/node/pull/26638

const {Readable, Writable, pipeline} = require('stream');

const read = new Readable({
  read() {},
});

const write = new Writable({
  emitClose: false,
  write(data, enc, cb) {
    cb();
  },
});

setImmediate(() => read.destroy());

pipeline(read, write, (err) => {
  // this never be called because `write` won't emit 'close'
  console.log('done', err);
});
