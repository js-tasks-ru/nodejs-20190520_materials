const fs = require('fs');

const fileStream = fs.createReadStream('bad-char.txt', {
  highWaterMark: 9,
});

let content = '';

fileStream.on('data', (data) => { // Buffer
  console.log(data);
  content += data;
});

fileStream.on('end', () => {
  console.log(content);
});
