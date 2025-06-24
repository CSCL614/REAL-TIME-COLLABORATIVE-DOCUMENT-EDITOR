const express = require("express");
const router = express.Router();
const { getUsersList, register, login } = require("../controllers/userController");

router.get("/", getUsersList); // optional: protect with auth later
router.post("/register", register);
router.post("/login", login);

module.exports = router;
