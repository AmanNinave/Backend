const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name : {
        type : String ,
        required : true
    },
    email : String ,
    gender : String,
    password : String,
    image : String ,

}, {
    timestamps : true
})

const User = mongoose.model('User' , UserSchema );

module.exports = User;