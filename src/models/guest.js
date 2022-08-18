import mongoose from "mongoose"

const guestSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
})

 const GuestModel = mongoose.model('Room', guestSchema);

 export default GuestModel;