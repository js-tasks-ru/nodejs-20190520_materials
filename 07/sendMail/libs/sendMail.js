const juice = require('juice');
const config = require('config');
const path = require('path');
const pug = require('pug');

const nodemailer = require('nodemailer');
const htmlToText = require('nodemailer-html-to-text').htmlToText;
const SMTPTransport = require('nodemailer-smtp-transport');
const StubTransport = require('nodemailer-stub-transport');

const transportEngine = process.env.NODE_ENV === 'test'
  ? new StubTransport()
  : new SMTPTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: config.get('mailer.user'),
      pass: config.get('mailer.password'),
    },
  });

const transport = nodemailer.createTransport(transportEngine);

transport.use('compile', htmlToText());

module.exports = async function sendMail(options) {
  const html = pug.renderFile(
      path.join(__dirname, '../templates', options.template) + '.pug',
      options.locals || {},
  );

  const message = {
    html: juice(html),
    to: {
      address: options.to,
    },
    subject: options.subject,
  };

  return await transport.sendMail(message);
};
