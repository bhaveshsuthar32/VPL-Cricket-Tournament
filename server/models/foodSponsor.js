    const mongoose = require('mongoose');

    const foodSponsor = new mongoose.Schema({
        sponDay : {
            type : String,
            required : false,
        },
        fullName : {
            type : String,
            required : false,
        },
        village : {
            type : String,
            required : false,
        },
        amount : {
            type : String,
            required : false,
        },
        spImage : {
            type : String,
            required : false,
        },
    })

    const foodSpon = mongoose.model('foodSponsor', foodSponsor);

    module.exports = foodSpon; 

