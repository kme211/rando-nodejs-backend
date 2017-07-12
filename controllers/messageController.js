const { send } = require("../handlers/mail");

exports.sendMessage = async (req, res) => {
  const options = Object.assign({}, req.body, {
    filename: 'message-recieved',
    subject: 'Someone sent you a message!',
    user: { email: "kungfu.keari@gmail.com" }
  });
  const message = await send(options);
  res.json(message);
};
