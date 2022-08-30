import mongoose from "mongoose";

const roomSchema = new mongoose.Schema({
    name: mongoose.SchemaTypes.String
})

 const RoomModel = mongoose.model('Room', roomSchema);

 export default RoomModel;