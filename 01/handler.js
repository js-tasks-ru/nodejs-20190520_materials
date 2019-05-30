const obj = {};

function handler(req, res) {
  obj[Math.random()] =  new Array(100000).fill('*');
  // 500ms
  res.end('hello world');
}

module.exports = handler;
