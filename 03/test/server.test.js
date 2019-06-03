/*
* 1. launch server
* 2. make request
* 3. compare response
* */

const assert = require('assert');
const axios = require('axios');
const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

const server = require('../server');

describe('server tests', () => {
  before((done) => {
    server.listen(3000, done);
  });
  
  after((done) => {
    server.close(done);
  });
  
  it('1.txt', async () => {
    const content = fs.readFileSync(path.join(__dirname, '../1.txt'));
    const response = await axios.get('http://localhost:3000/1');

    assert.strictEqual(content.toString('utf-8'), response.data);
  });
  
  it('2.txt', async () => {
    const content = fs.readFileSync(path.join(__dirname, '../2.txt'));
    const response = await axios.get('http://localhost:3000/2', {
      responseType: 'arraybuffer'
    });
    
    assert.deepStrictEqual(
      zlib.gunzipSync(response.data),
      content
    );
  });
  
  it('big.png', async () => {
    const content = fs.readFileSync(path.join(__dirname, '../big.png'));
    const response = await axios.get('http://localhost:3000/image', {
      responseType: 'arraybuffer'
    });
    
    assert.deepStrictEqual(
      zlib.gunzipSync(response.data),
      content
    );
  });
});
