import { Schema } from "mongoose";

const ReservationSchema = new Schema({
    date_in: {
        required: true,
        type: Date,
    },
    date_out: {
        required: true,
        type: Date,
    },
    status: {
        required: true,
        type: String,
    },
    made_by: {
        required: true,
        type: String,
    },
});

export default ReservationSchema;
