const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const jobSchema = new Schema({
    is_emergency: {
        type: Boolean
    },
    title: {
        type: String
    },
    description: {
        type: String,
        required: true
    },
    allow_contact_by_app: {
        type: Boolean,
    },
    can_user_bring_boat: {
        type: Boolean,
    },
    allow_picking_from_spot: {
        type: Boolean,
    },
    allow_repair_on_spot: {
        type: Boolean,
    },
    allow_contact_by_phone: {
        type: Boolean,
    },
    allow_contact_by_email: {
        type: Boolean,
    },
    lat: {
        type: Float
    },
    lng: {
        type: Float
    },
    price: {
        type: Float
    },
    posted: {
        type: Boolean
    },
    due_date: {
        type: Date,
    },
    due_time: {
        type: Time
    },
    is_done: {
        type: Boolean
    },
    user_id: {
        type: Number,
        required: true
    },
    boat_id: {
        type: Number,
        required: true
    },
    service_id: {
        type: Number,
        required: true
    },
    awarded_company_id: {
        type: Number,
        required: true
    }
}, {
    timestamps: true,

});

const Job = mongoose.model('Job', jobSchema);

module.exports = Job;