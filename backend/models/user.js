const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
    active: {
        type: Boolean
    },
    profile_pic: {
        type: String
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    user_role_id: {
        type: Number
    },
    password: {
        type: String
    },
    phone_number: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    zip_code: {
        type: String
    },
    city: {
        type: String,
        required: true
    }
}, {
    timestamps: true,

});

const User = mongoose.model('User', userSchema);

module.exports = User;