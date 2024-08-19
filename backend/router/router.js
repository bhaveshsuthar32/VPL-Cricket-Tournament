const express = require('express');
const router = express.Router();

const { signUser, loginUser } = require('../controller/userController');

router.post("/sign", signUser);
router.post("/login", loginUser);

module.exports = router ;