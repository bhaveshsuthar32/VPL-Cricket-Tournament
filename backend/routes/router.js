const express = require('express');
const router = express.Router();

const { signUser, loginUser, getUser } = require('../controllers/userController');
const { addSponsorType, getSponsorType } = require('../controllers/sponsorController');

router.post("/sign", signUser);
router.post("/login", loginUser);
router.get("/user", getUser);

router.post("/sponsorType", addSponsorType); 
router.get("/getSponsorType", getSponsorType)

module.exports = router;