const express = require('express');
const router = express.Router();
const multer = require('multer');



// Configure multer for file handling
const upload = multer({ 
    storage: multer.diskStorage({}),
    limits: {fileSize: 500000}
}); // Temporary storage for uploaded files


const { signUser, loginUser, getUser, editUserCaptain } = require('../controllers/userController');
const { addSponsorType, getSponsorType, addFoodSpon, addOtherSpon, getFoodSpon, getOtherSpon } = require('../controllers/sponsorController');
const { addAdvertise, getAdvertiser } = require('../controllers/advertiserCont');

router.post("/sign", signUser);
router.post("/login", loginUser);
router.get("/user", getUser);
router.patch('/editCaptain', editUserCaptain);


router.post("/sponsorType", addSponsorType); 
router.get("/getSponsorType", getSponsorType)



router.post('/addFoodSpon', upload.single('spImage'), addFoodSpon);
router.get('/getFoodSpon', getFoodSpon);
router.post('/addOtherSpon', upload.single('spOtherImage'), addOtherSpon);
router.get('/getOtherSpon', getOtherSpon);

router.post('/addAdvertise', upload.single('shopLogo'), addAdvertise);
router.get('/getAdvertise',  getAdvertiser);




module.exports = router;