const mongoose = require('mongoose');


//Schema declaration
const RegisterUser = new mongoose.Schema({
    userID:{
        type: String,
        required: true
    },
    mobileNo:{
        type: String, // change this to Number
        required: true
    },
    email:{
        type: String,  // Change this to email
        required: true
    }
});

//Schema exports

module.exports = mongoose.model('RegisterUsers', RegisterUser);