import mongoose from "mongoose";

const GuestSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String,
    },
});

export default GuestSchema;
