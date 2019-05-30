const fs = require('fs');

const fileIn = fs.createReadStream(__filename, {
  highWaterMark: 100,
});

const fileOut = fs.createWriteStream(__filename + '.out', {
  highWaterMark: 100,
});

fileIn.on('data', (data) => {
  const isWillingMore = fileOut.write(data);

  if (!isWillingMore) {
    console.log('debug <-- pause');
    fileIn.pause();

    fileOut.once('drain', () => {
      console.log('debug <-- resume');
      fileIn.resume();
    });
  }
});

fileIn.on('end', () => {
  fileOut.end();
});
