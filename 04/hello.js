const Koa = require('koa');
const app = new Koa();

app.use(async (ctx, next) => {
  if (ctx.url !== '/') return next();
  
  // ctx.req/ctx.res

  // ctx.url, ctx.get('auth'), ctx.req
  // ctx.response.body = "hello"
  ctx.body = {result: 'hello'};
});

app.listen(3000);
