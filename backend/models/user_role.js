const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userRoleSchema = new Schema({
    role: {
        type: String
    }
}, {
    timestamp: true,

});

const userRole = mongoose.model('User_role', userRoleSchema);

module.exports = userRole;