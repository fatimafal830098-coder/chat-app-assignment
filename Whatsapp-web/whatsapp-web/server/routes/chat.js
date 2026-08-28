const express = require("express");

const { listChatUsers } = require("../controller/chat");
const { protect } = require("../middleware/protect");

const router = express.Router();

router.get("/users", protect, listChatUsers);

module.exports = router;
