const axios = require("axios");
const htmlToText = require("html-to-text");
const generate = require("./generate");

exports.send = async options => {
  const { html, text } = generate(options.filename, options);

  const data = {
    recipients: [
      {
        address: options.to
      }
    ],
    content: {
      from: options.from,
      subject: options.subject,
      html,
      text
    }
  };

  return axios({
    method: "POST",
    url: "https://api.sparkpost.com/api/v1/transmissions?num_rcpt_errors=3",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: process.env.SPARKPOST_API_KEY
    },
    data
  });
};
