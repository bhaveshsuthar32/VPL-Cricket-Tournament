const express = require('express');
const router = express.Router();
const multer = require('multer');



// Configure multer for file handling
const upload = multer({ 
    storage: multer.diskStorage({}),
    limits: {fileSize: 500000}
}); // Temporary storage for uploaded files


const { signUser, loginUser, getUser } = require('../controllers/userController');
const { addSponsorType, getSponsorType, addFoodSpon } = require('../controllers/sponsorController');

router.post("/sign", signUser);
router.post("/login", loginUser);
router.get("/user", getUser);

router.post("/sponsorType", addSponsorType); 
router.get("/getSponsorType", getSponsorType)



router.post('/addFoodSpon', upload.single('spImage'), addFoodSpon);



module.exports = router;