import mongoose from "mongoose"

const roomSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
})

 const RoomModel = mongoose.model('Room', roomSchema);

 export default RoomModel;