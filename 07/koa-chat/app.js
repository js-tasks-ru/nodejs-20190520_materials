const Koa = require('koa');
const app = new Koa();

app.use(require('koa-static')('public'));
app.use(require('koa-bodyparser')());

const Router = require('koa-router');
const router = new Router();

let messages = [];

let r = []

router.get('/history', async (ctx, next) => {
  ctx.body = messages;
});

router.get('/subscribe', async (ctx, next) => {
  const msg = await new Promise(resolve => {
    r.push(resolve);
    
    ctx.req.on('close', () => {
      if (ctx.req.finished) return;
      
      resolve();
    });
  });
  
  ctx.body = msg;
});

router.post('/publish', async (ctx, next) => {
  // resolve()
  const message = ctx.request.body.message;
  
  if (!message) ctx.throw(400);
  
  messages.push(message);
  messages = messages.slice(0, 100);
  
  r.forEach(_resolve => _resolve(message));
  r = [];

  ctx.body = 'Ok';
});

app.use(router.routes());

module.exports = app;
