const router = require("express").Router();
const { catchErrors } = require("../../handlers/errorHandlers");
const messageController = require("../../controllers/messageController");

router.post("/", catchErrors(messageController.sendMessage));

module.exports = router;