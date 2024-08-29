const express = require('express');
const router = express.Router();

const { signUser, loginUser, getUser } = require('../controllers/userController');
const { addSponsorType } = require('../controllers/sponsorController');

router.post("/sign", signUser);
router.post("/login", loginUser);
router.get("/user", getUser);

// Corrected route definition
router.post("/sponsorType", addSponsorType); // Added the leading slash

module.exports = router;