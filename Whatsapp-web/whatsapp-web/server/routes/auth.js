const express = require("express");

const { register, login, logout, get } = require("../controller/user");
const { protect } = require("../middleware/protect");

const router = express.Router();

router.post("/login", login);
router.post("/register", register);
router.post("/logout", logout);
router.get("/get", protect, get);

module.exports = { auth: router };