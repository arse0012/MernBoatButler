const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const proposalSchema = new Schema({
    date: {
        type: Date,
        required: true
    },
    time: {
        type: Time,
        required: true
    },
    description: {
        type: Text,
        required: true
    },
    negotiable: {
        type: Boolean,
        required: true
    },
    status: {
        type: Enum('pending','Accepted', 'rejected', 'canceled')
    },
    company_id: {
        type: Number,
        required: true
    },
    job_id: {
        type: Number,
        required: true
    }
}, {
    timestamps: true,
});