const assert = require('assert');
const axios = require('axios');
const fs = require('fs');
const path = require('path');

const server = require('../server');

describe('server tests', () => {
  before((done) => {
    fs.writeFileSync(path.join(__dirname, '../files/1.txt'), '1.txt');
    server.listen(3000, done);
  });
  
  after((done) => {
    server.close(done);
  });
  
  xit('GET 1.txt', async () => {
    const content = fs.readFileSync(path.join(__dirname, '../files/1.txt'));
    const response = await axios.get('http://localhost:3000/1.txt');
    
    assert.strictEqual(content.toString('utf-8'), response.data);
  });
  
  xit('DELETE 1.txt', async () => {
    const response = await axios.delete('http://localhost:3000/1.txt');
    
    assert.strictEqual(response.data, 'ok');
    assert.strictEqual(fs.existsSync(path.join(__dirname, '../files/1.txt')), false);
  });
  
  it('Complex case', async () => {
    const content = fs.readFileSync(path.join(__dirname, '../files/1.txt'));
    
    const [r1, r2] = await Promise.all([
      axios.get('http://localhost:3000/1.txt'),
      axios.delete('http://localhost:3000/1.txt'),
    ]);
  
    assert.strictEqual(content.toString('utf-8'), r1.data);
  
    assert.strictEqual(r2.data, 'ok');
    assert.strictEqual(fs.existsSync(path.join(__dirname, '../files/1.txt')), false);
  });
});
