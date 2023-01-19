import { Schema } from "mongoose";

const ReservationSchema = new Schema({
    // Guest who made the reservation
    reserved_by: {
        type: String,
        required: true,
    },
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

    // Staff resposible for the creation of this reservation.
    created_by: {
        required: true,
        type: String,
    },
});

export default ReservationSchema;
