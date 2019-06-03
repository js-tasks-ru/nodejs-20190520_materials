const Koa = require('koa');
const Router = require('koa-router');
const parse = require('koa-bodyparser');
const serve = require('koa-static');
const logger = require('koa-logger');
const auth = require('./auth');

const config = require('./config');

const app = new Koa();

app.use(parse());
app.use(serve('public'));
app.use(logger());

app.use(async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    if (err.status) {
      ctx.status = err.status;
      ctx.body = {error: err.message};
    } else {
      ctx.status = 500;
      ctx.body = {error: 'Internal server error'};
    }
  }
});

// app.use(async (ctx, next) => {
//   if (ctx.method !== 'POST') return next();
//
//   const chunks = [];
//
//   for await (const chunk of ctx.req) {
//     chunks.push(chunk);
//   }
//
//   const str = Buffer.concat(chunks).toString('utf-8');
//
//   ctx.request.body = JSON.parse(str);
//
//   return next();
// });

const router = new Router();

router.get('/hello', async (ctx, next) => { // GET /hello
  ctx.body = {message: 'hello'};
});

router.post('/bye', async (ctx, next) => { // POST /bye
  // ctx.request.body = {}
  /*
  * {name: 'Ivan'}
  * */
  ctx.body = {message: `bye ${ctx.request.body.name}`};
});

router.post('/register', auth.register);
router.post('/login', auth.login);

app.use(router.routes());

app.listen(config.port);
