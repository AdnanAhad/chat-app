const express = require("express");
const groupController = require("../controllers/groupController");
const auth = require("../middleware/auth");
const router = express.Router();

router.post("/", auth, groupController.createGroup);
router.post("/:groupId/messages", auth, groupController.sendGroupMessage);

module.exports = router;
