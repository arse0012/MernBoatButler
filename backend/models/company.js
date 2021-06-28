const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const companySchema = new Schema({
    name: {
        type: String
    },
    is_paid: {
        type: Boolean,
    },
    is_enabled: {
        type: Boolean,
    },
    is_visible: {
        type: Boolean,
    },
    logo_image_url: {
        type: String,
    },
    cvr: {
        type: Char(10),
    },
    lat: {
        type: Float
    },
    lng: {
        type: Float
    },
    user_id: {
        type: Number,
        required: true
    },
}, {
    timestamps: true,

});

const Company = mongoose.model('Company', companySchema);

module.exports = Company;