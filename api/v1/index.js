const router = require("express").Router();
const weather = require("./weather");

router.use("/weather", weather);

module.exports = router;