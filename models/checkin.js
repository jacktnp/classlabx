var mongoose = require('mongoose');
const uniqueValidator = require("mongoose-unique-validator");

var checkinSchema = mongoose.Schema({
    userid: {
        type: String, required: true, unique: true
    },
    nickname: {
        type: String, required: true
    },
    section: {
        type: Number, required: true
    },
    lab: {
        type: Number, required: true
    }
});

checkinSchema.plugin(uniqueValidator);
var UserCheckin = module.exports = mongoose.model('checkinSchema', checkinSchema)