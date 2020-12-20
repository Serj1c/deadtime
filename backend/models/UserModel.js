import { Schema as _Schema, model } from "mongoose";
const Schema = _Schema;

const UserSchema = new Schema ({
    name: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
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

export default User = model('user', UserSchema)