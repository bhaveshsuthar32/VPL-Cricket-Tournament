const express = require('express');
const router = express.Router();
// const multer = require('multer');
const upload = require("../middlewares/upload");



// Configure multer for file handling
// const upload = multer({ 
//     storage: multer.diskStorage({}),
//     limits: {fileSize: 500000}
// }); // Temporary storage for uploaded files


// const { signUser, loginUser, getUser, editUserCaptain } = require('../controllers/userController');
// const { addSponsorType, getSponsorType, addFoodSpon, addOtherSpon,getFoodSpon,getOtherSpon ,deleteSponsorType,deleteFoodSpon,deleteOtherSpon} = require('../controllers/sponsorController');
// const { addAdvertise, getAdvertiser,  deleteAdvertiser } = require('../controllers/advertiserCont');

// router.post("/sign", signUser);
// router.post("/login", loginUser);
// router.get("/user", getUser);
// router.patch('/editCaptain', editUserCaptain);


// router.post("/sponsorType", addSponsorType); 
// router.get("/getSponsorType", getSponsorType)
// router.delete("/deletesponsortype/:id", deleteSponsorType);



// router.post('/addFoodSpon', upload.single('spImage'), addFoodSpon);
// router.get('/getFoodSpon', getFoodSpon);
// router.delete("/food-sponser/:id", deleteFoodSpon);

// router.post('/addOtherSpon', upload.single('spOtherImage'), addOtherSpon);
// router.get('/getOtherSpon', getOtherSpon);
// router.delete("/other-sponser/:id", deleteOtherSpon);

// router.post('/addAdvertise', upload.single('shopLogo'), addAdvertise);
// router.get('/getAdvertise',  getAdvertiser);
// router.delete("/advertiser/:id", deleteAdvertiser);



// module.exports = router;



const {
    signUser,
    loginUser,
    getUser,
    editUserCaptain,
  } = require("../controllers/userController");
  const {
    addSponsorType,
    getSponsorType,
    addFoodSpon,
    addOtherSpon,
    getFoodSpon,
    getOtherSpon,
    deleteSponsorType,
    deleteFoodSpon,
    deleteOtherSpon,
    editSponsorType,
    editFoodSponsor,
    editOtherSponsor,
    getSponsorById,
    getOtherSponsorById,
    getFoodSponsorById,
  } = require("../controllers/sponsorController");
  const {
    addAdvertise,
    getAdvertiser,
    deleteAdvertiser,
    editAdvertiser,
    getAdvertiserById,
  } = require("../controllers/advertiseController");
  
  const { addHallOfFame, getHallOfFame, getHallOfFameById, deleteHallOfFame, editHallOfFame } = require("../controllers/hallOfFame");
  
  router.post("/sign", signUser);
  router.post("/login", loginUser);
  router.get("/user", getUser);
  router.patch("/editCaptain", editUserCaptain);
  
  // SponsorType Route ------------
  router.post("/sponsorType", addSponsorType);
  router.get("/getSponsorType", getSponsorType);
  router.get("/getSponsorType/:id", getSponsorById);
  router.delete("/deletesponsortype/:id", deleteSponsorType);
  router.patch("/sponsor-type/:id", editSponsorType);
  
  // Food Sponsor Route --------------------
  router.post("/addFoodSpon", upload.single("spImage"), addFoodSpon);
  router.get("/getFoodSpon", getFoodSpon);
  router.get("/getFoodSpon/:id", getFoodSponsorById);
  router.delete("/food-sponser/:id", deleteFoodSpon);
  router.patch("/food-sponser/:id", upload.single("spImage"), editFoodSponsor);
  
  // Other Sponsor Route ----------------
  router.post("/addOtherSpon", upload.single("spOtherImage"), addOtherSpon);
  router.get("/getOtherSpon", getOtherSpon);
  router.get("/getOtherSpon/:id", getOtherSponsorById);
  router.delete("/other-sponser/:id", deleteOtherSpon);
  router.patch("/other-sponser/:id", upload.single("spOtherImage"), editOtherSponsor);
  
  // Advertiser Routes -----------------
  router.post("/addAdvertise", upload.single("shopLogo"), addAdvertise);
  router.get("/getAdvertise", getAdvertiser);
  router.get("/getAdvertise/:id", getAdvertiserById);
  router.delete("/advertiser/:id", deleteAdvertiser);
  router.patch("/advertiser/:id", upload.single("shopLogo"), editAdvertiser);
  
  // Hall Of Fame Routes -----------------
  router.post("/hall-of-fame", upload.single("hofImage"), addHallOfFame);
  router.get("/hall-of-fame", getHallOfFame);
  router.get("/hall-of-fame/:id", getHallOfFameById);
  router.delete("/hall-of-fame/:id", deleteHallOfFame);
  router.patch("/hall-of-fame/:id", upload.single("hofImage"), editHallOfFame);
  

  
module.exports = router;