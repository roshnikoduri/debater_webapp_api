const express = require("express");
const { createUser,validateUser } = require("../controller/User");
const router = express.Router();
router.post("/create", createUser);
router.post("/validate", validateUser);
module.exports = router;
