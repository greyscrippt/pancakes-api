import { Schema } from "mongoose";

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        minlength: 6,
        required: true,
    },
    roles: {
        type: [String],
    },
    createdAt: {
      type: Date,
    },
    updatedAt: {
      type: Date,
    },
}, { timestamps: true });

export default UserSchema;
