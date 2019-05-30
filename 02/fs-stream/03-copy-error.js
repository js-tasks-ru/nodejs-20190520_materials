// Что здесь не так? Как поправить?
const fs = require('fs');

const fileIn = fs.createReadStream(__filename, {highWaterMark: 100});
const fileOut = fs.createWriteStream(__filename + '.out', {highWaterMark: 100});

fileIn.pipe(fileOut);

fileIn.on('error', (error) => {});
fileOut.on('error', (error) => {});
