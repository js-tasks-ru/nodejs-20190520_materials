const Koa = require('koa');
const app = new Koa();

app.use(async function(ctx, next) {
  try {
    await next();
  } catch (e) {
    if (e.status) { // User error
      ctx.body = e.message;
      ctx.status = e.status;
    } else { // Server error
      ctx.body = 'Internal error';
      ctx.status = 500;
      console.error(e.message, e.stack);
    }
  }
});

app.use(async (ctx, next) => {
  // 1. normal error-handling, 500
  // throw new Error('Error thrown');

  // 2. user-level error (the difference: error.status), show 403
  ctx.throw(403, 'Sorry, access denied');
});

app.listen(3000);
