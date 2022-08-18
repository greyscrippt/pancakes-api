import mongoose from "mongoose"

const roomSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
})

 const roomModel = mongoose.model('Room', roomSchema);

 export {
    roomModel,
 };