const Koa = require('koa');
const app = new Koa();
const pug = require('pug');
const uuid = require('uuid/v4');
const session = require('koa-session');
const jwt = require('jsonwebtoken');

const sessions = {};

// const sessions = {[id]: {count: 1}, [new_id]: {}};

// app.use(session({
//   signed: false,
// }, app)); // ctx.session = {}

app.use((ctx, next) => {
  const id = ctx.cookies.get('my_session_key');
  if (id && sessions[id]) {
    if (sessions[id].expiresAt > Date.now()) {
      ctx.session = sessions[id];
      return next();
    } else {
      delete sessions[id];
    }
  }
  
  // const newId = uuid();
  const newId = jwt.sign({
    user: 'admin',
    name: 'Sergey',
  }, 'secret');

  sessions[newId] = {expiresAt: Date.now() + 1000 * 5};
  ctx.session = sessions[newId];
  ctx.cookies.set('my_session_key', newId);
  return next();
});

app.use(async (ctx, next) => {
  const count = ctx.session.count || 0;
  ctx.session.count = count + 1;
  
  ctx.body = pug.renderFile('hello.pug', {
    name: ctx.query.name,
    count: ctx.session.count,
  });
});

app.listen(3000);
