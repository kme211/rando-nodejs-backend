const { send } = require("../handlers/mail");

exports.sendMessage = async (req, res) => {
  let data = null;

  const options = Object.assign({}, req.body, {
    filename: "message-recieved",
    subject: "Message recieved at kearieggers.com",
    from: {
      email: "mailbot@mail.kearieggers.com",
      name: "mailbot @ kearieggers.com"
    },
    to: "kungfu.keari@gmail.com"
  });
  const response = await send(options);

  if (response.data) data = response.data;
  else data = response;

  res.json(data);
};
