const fs = require('fs');
const {finished} = require('stream');

const rs = fs.createReadStream(__filename);

finished(rs, (err) => {
  if (err) {
    console.error('Stream failed', err);
  } else {
    console.log('Stream is done reading');
  }
});

rs.resume(); // drain the stream
