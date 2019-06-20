const sendMail = require('./libs/sendMail');

(async function() {
  const transportResponse = await sendMail({
    to: 's.zelenov@javascript.ru',
    subject: 'Приветствуем на сайте learn.javascript.ru',
    locals: {name: 'Сергей'},
    template: 'hello',
  });

  console.log(transportResponse);
})().catch(console.error);
