const mongoose = require('mongoose');

const sponsorType = new mongoose.Schema({
    spnosorType : {
        type : String,
        required : false,
        unique: true,
       
    }
})

const Sponsor = mongoose.model('sponsorType', sponsorType); 

module.exports = Sponsor; 