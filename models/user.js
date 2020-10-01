var mongoose = require('mongoose');
const uniqueValidator = require("mongoose-unique-validator");

var userSchema = mongoose.Schema({
    username: {
        type: String, required: true, unique: true
    },
    password: {
        type: String
    }
});

userSchema.plugin(uniqueValidator);
var User = module.exports = mongoose.model('user', userSchema)