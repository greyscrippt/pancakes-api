import mongoose from "mongoose";
import RoomSchema from "../schema/RoomSchema";

const RoomModel = mongoose.model('Guest', RoomSchema);

export default RoomModel;