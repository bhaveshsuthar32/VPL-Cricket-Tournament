const mongoose = require('mongoose');

const hallSchema = new mongoose.Schema({
    role : {
        type : String,
        required : false,
    },
    name : {
        type : String,
        required : false,
    },
    village : {
        type : String,
        required : false,
    },
    team : {
        type : String,
        required : false,
    },
    score : {
        type : String,
        required : false,
    },
    hofImage : {
        type : String,
        required : false,
    },
}, { timestamps: true });

const hallOfFame = mongoose.model('hall-of-fame', hallSchema);

module.exports = hallOfFame; 

