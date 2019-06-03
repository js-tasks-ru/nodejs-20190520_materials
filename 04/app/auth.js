const users = {};

exports.register = async function register(ctx, next) {
  /*
  {name: '', password: ''}
  * */
  
  const {name, password} = ctx.request.body;
  
  if (users[name]) ctx.throw(400, 'user already registered');
  
  users[name] = {name, password};
  ctx.body = 'welcome!';
};

exports.login = async function login(ctx, next) {
  const {name, password} = ctx.request.body;
  
  if (!users[name]) ctx.throw(400, 'user not registered');
  if (users[name].password !== password) ctx.throw(401, 'password invalid');
  
  ctx.body = 'success!';
};
