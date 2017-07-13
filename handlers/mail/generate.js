const pug = require("pug");
const juice = require("juice");
const htmlToText = require("html-to-text");

const generateHTML = (filename, options = {}) => {
  const html = pug.renderFile(
    `${__dirname}/../../views/email/${filename}.pug`,
    options
  );
  const inline = juice(html);
  const text = htmlToText.fromString(html);
  return { html: inline, text };
};

module.exports = generateHTML;
