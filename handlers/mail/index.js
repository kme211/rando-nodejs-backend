module.exports = process.env === "production"
  ? require("./mail.prod")
  : require("./mail.dev");
