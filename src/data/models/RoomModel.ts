import { model } from "mongoose";
import RoomSchema from "../schema/RoomSchema";

const RoomModel = model('Room', RoomSchema);

export default RoomModel;
