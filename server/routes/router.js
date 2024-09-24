const express = require('express');
const router = express.Router();
const multer = require('multer');



// Configure multer for file handling
// const upload = multer({ 
//     storage: multer.diskStorage({}),
//     limits: {fileSize: 500000}
// }); // Temporary storage for uploaded files

const upload = multer({
    storage: multer.memoryStorage({}),
    limits: { fileSize: 500000 },
  });
  

const { signUser, loginUser, getUser, editUserCaptain } = require('../controllers/userController');
const { addSponsorType, getSponsorType, addFoodSpon, addOtherSpon,getFoodSpon,getOtherSpon ,deleteSponsorType,deleteFoodSpon,deleteOtherSpon} = require('../controllers/sponsorController');
const { addAdvertise, getAdvertiser,  deleteAdvertiser, getAdvertiserById, editAdvertiser } = require('../controllers/advertiserCont');

router.post("/sign", signUser);
router.post("/login", loginUser);
router.get("/user", getUser);
router.patch('/editCaptain', editUserCaptain);


router.post("/sponsorType", addSponsorType); 
router.get("/getSponsorType", getSponsorType)
router.delete("/deletesponsortype/:id", deleteSponsorType);



router.post('/addFoodSpon', upload.single('spImage'), addFoodSpon);
router.get('/getFoodSpon', getFoodSpon);
router.delete("/food-sponser/:id", deleteFoodSpon);

router.post('/addOtherSpon', upload.single('spOtherImage'), addOtherSpon);
router.get('/getOtherSpon', getOtherSpon);
router.delete("/other-sponser/:id", deleteOtherSpon);

// router.post('/addAdvertise', upload.single('shopLogo'), addAdvertise);
// router.get('/getAdvertise',  getAdvertiser);
// router.delete("/advertiser/:id", deleteAdvertiser);


router.post('/addAdvertise', upload.single('shopLogo'), addAdvertise);
router.get('/getAdvertise',  getAdvertiser);
router.get("/getAdvertise/:id", getAdvertiserById);
router.delete("/advertiser/:id", deleteAdvertiser);
router.patch("/advertiser/:id", upload.single("shopLogo"), editAdvertiser);




module.exports = router;
