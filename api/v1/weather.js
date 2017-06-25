const router = require("express").Router();
const { catchErrors } = require("../../handlers/errorHandlers");
const weatherController = require("../../controllers/weatherController");

router.get("/:coords", catchErrors(weatherController.getWeather));

module.exports = router;