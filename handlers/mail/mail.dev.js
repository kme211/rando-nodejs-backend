const nodemailer = require("nodemailer");
const promisify = require("es6-promisify");
const generate = require("./generate");

const transport = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS
  }
});

exports.send = async options => {
  const { html, text } = generate(options.filename, options);

  const mailOptions = {
    from: options.from.email,
    to: options.to,
    subject: options.subject,
    html,
    text
  };
  const sendMail = promisify(transport.sendMail, transport);
  return sendMail(mailOptions);
};
