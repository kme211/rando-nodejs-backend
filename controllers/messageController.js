const { send } = require("../handlers/mail");

exports.sendMessage = async (req, res) => {
  let data = null;

  const options = Object.assign({}, req.body, {
    filename: "message-recieved",
    subject: `Message recieved at ${process.env.DOMAIN}`,
    from: {
      email: process.env.MAIL_FROM_EMAIL,
      name: process.env.MAIL_FROM_NAME
    },
    to: process.env.MAIL_TO_EMAIL
  });
  const response = await send(options);

  if (response.data) data = response.data;
  else data = response;

  res.json(data);
};
