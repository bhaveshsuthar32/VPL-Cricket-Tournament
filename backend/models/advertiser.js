const mongoose = require('mongoose');

const adSchema = new mongoose.Schema({
    shopName : {
        type : String,
        required : false,
    },
    ownerName : {
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
    shopLogo : {
        type : String,
        required : false,
    },
})

const advertiser = mongoose.model('advertiser', adSchema);

module.exports = advertiser; 

