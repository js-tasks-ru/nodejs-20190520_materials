const Koa = require('koa');
const fs = require('fs').promises;
const app = new Koa();

app.use(async (ctx, next) => {
  console.log('--> middleware chain has been started', ctx.url);

  let time = new Date();

  await next();

  time = new Date() - time;

  console.log('<-- middleware chain has been ended', time, 'ms');
});

app.use((ctx, next) => {
  console.log('--> add useful method to ctx');

  ctx.renderFile = async function(file) {
    return await fs.readFile(file, 'utf-8');
  };

  return next();
});

app.use(async (ctx, next) => {
  if (ctx.url !== '/favicon.ico') return next();
  
  ctx.body = await ctx.renderFile('favicon.ico');
});

app.use(async (ctx, next) => {
  console.log('--> work, work!');

  ctx.body = await ctx.renderFile(__filename);

  console.log('<-- work complete!');
});

app.listen(3000);
