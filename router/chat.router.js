let chatController = require("../controller/chat.controller");
let express = require("express");
let router = express.Router();


router.post("/storeChat",chatController.storeChat);

module.exports = router;