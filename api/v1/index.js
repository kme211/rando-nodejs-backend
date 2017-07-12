const router = require("express").Router();
const weather = require("./weather");
const message = require("./message");

router.use("/weather", weather);
router.use("/message", message);

module.exports = router;