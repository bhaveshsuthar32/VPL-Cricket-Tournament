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
        Village : {
            type : String,
            required : false,
        },
        Amount : {
            type : String,
            required : false,
        },
        spImage : {
            type : String,
            required : false,
        },
    })

    const foodSpon = mongoose.model('foodSponsor', foodSponsor);




    const otherSponsor = new mongoose.Schema({
        sponType : {
            type : String,
            required : false,
        },
        fullName : {
            type : String,
            required : false,
        },
        Village : {
            type : String,
            required : false,
        },
        Amount : {
            type : String,
            required : false,
        },
        spImage : {
            type : String,
            required : false,
        },
    })

    const otherSpon = mongoose.model('otherSponsor', otherSponsor);

    exports.model = {
        foodSpon,
        otherSpon,
    }