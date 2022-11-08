import mongoose from "mongoose";
import UserSchema from "../schema/UserSchema";

const UserModel = mongoose.model('User', UserSchema);

export default UserModel;
