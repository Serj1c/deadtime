import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const Users = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }      
});

module.exports = mongoose.model('Users', Users);