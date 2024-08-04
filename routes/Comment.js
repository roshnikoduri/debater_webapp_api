const express = require("express");
const { createComment,getCommentLists } = require("../controller/Comment");
const router = express.Router();
router.post("/create", createComment);
router.get("/:id", getCommentLists);
module.exports = router;
