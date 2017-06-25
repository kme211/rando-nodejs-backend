require('dotenv').config()
const express = require("express");
const cors = require('cors');
const api = require("./api");
const errorHandlers = require("./handlers/errorHandlers");
const morgan = require("morgan");

const app = express();

app.use(cors())

const logger = morgan('combined', {
  skip: function (req, res) { return res.statusCode < 400 }
});

const whitelist = [""]

app.use(logger);

app.use("/api", api);

if (app.get("env") === "development") {
  app.use(errorHandlers.developmentErrors);
}

app.use(errorHandlers.productionErrors);

app.set('port', process.env.PORT || 7777);
const server = app.listen(app.get('port'), () => {
  console.log(`Express running → PORT ${server.address().port}`);
});

module.exports = app;