const mongoose = require('mongoose');

const otherSponsor = new mongoose.Schema({
    sponType: {
        type: String,
        required: false,
    },
    fullName: {
        type: String,
        required: false,
    },
    village: {
        type: String,
        required: false,
    },
    amount: {
        type: String,
        required: false,
    },
    spOtherImage: {
        type: String,
        required: false,
    },
})

const otherSpon = mongoose.model('otherSponsor', otherSponsor);

module.exports = otherSpon;

