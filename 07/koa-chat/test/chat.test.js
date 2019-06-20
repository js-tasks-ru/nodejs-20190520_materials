const path = require('path');
process.env['NODE_CONFIG_DIR'] = path.join(__dirname, '../config');

const request = require('request-promise');
const app = require('../app');
const expect = require('chai').expect;

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

describe('5-module-1-task', () => {
  describe('тесты на чат', () => {
    let server;
    before((done) => {
      server = app.listen(3000, done);
    });

    after((done) => {
      server.close(done);
    });

    describe('POST /publish', () => {
      it('сообщение должно быть доставлено всем подписчикам', async () => {
        const message = 'text';

        const subscribers = Promise.all([
          request({
            method: 'GET',
            url: 'http://127.0.0.1:3000/subscribe',
            timeout: 500,
          }),
          request({
            method: 'GET',
            url: 'http://127.0.0.1:3000/subscribe',
            timeout: 500,
          }),
        ]);

        await sleep(50);

        await request({
          method: 'POST',
          url: 'http://127.0.0.1:3000/publish',
          json: true,
          body: {
            message,
          },
        });

        const messages = await subscribers;

        messages.forEach((msg) => {
          expect(msg, 'каждый подписчик должен получить исходное сообщение').to.equal(message);
        });
      });

      it('если нет сообщения - запрос должен игнорироваться', async () => {
        const message = 'text';

        const subscribers = Promise.all([
          request({
            method: 'GET',
            url: 'http://127.0.0.1:3000/subscribe',
            timeout: 500,
          }),
          request({
            method: 'GET',
            url: 'http://127.0.0.1:3000/subscribe',
            timeout: 500,
          }),
        ]);

        await sleep(50);

        await request({
          method: 'POST',
          url: 'http://127.0.0.1:3000/publish',
          json: true,
          simple: false,
          body: {},
        });

        await sleep(50);

        await request({
          method: 'POST',
          url: 'http://127.0.0.1:3000/publish',
          json: true,
          body: {
            message,
          },
        });

        const messages = await subscribers;

        messages.forEach((msg) => {
          expect(msg).to.equal(message);
        });
      });
    });
  });
});
