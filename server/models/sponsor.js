const mongoose = require('mongoose');

const sponsorTypeSchema = new mongoose.Schema({
    sponsorType: {
        type: String,
        required: true,
        unique: true,
    }
},{ timestamps: true });

const Sponsor = mongoose.model('SponsorType', sponsorTypeSchema); 

module.exports = Sponsor;
