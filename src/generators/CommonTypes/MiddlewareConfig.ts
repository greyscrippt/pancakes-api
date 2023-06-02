import { Model } from "mongoose";

type MiddlewareConfig = {
    type: string,
    model: Model<any, any>,
}
export default MiddlewareConfig

