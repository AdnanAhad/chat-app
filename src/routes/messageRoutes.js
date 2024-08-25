const express = require("express");
const messageController = require("../controllers/messageController");
const auth = require("../middleware/auth");
const router = express.Router();

router.post("/", auth, messageController.sendMessage);
router.get("/history", auth, messageController.getMessageHistory);

module.exports = router;
