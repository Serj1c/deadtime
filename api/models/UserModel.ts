import mongoose from "mongoose";

const UserSchema = new mongoose.Schema ({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    displayName: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true, /* TBD, check availability with google/facebook auth */
        unique: true
    },
    googleID: {
        type: String,
        required: true, /* TBD */
    },
    password: {
        type: String,
        required: true,
    },
    register_date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('User', UserSchema);