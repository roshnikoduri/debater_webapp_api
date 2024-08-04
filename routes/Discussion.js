const express = require("express");
const { createTopic,getTopicLists } = require("../controller/Discussion");
const router = express.Router();
router.post("/create", createTopic);
router.get("/", getTopicLists);
module.exports = router;
