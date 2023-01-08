import { Model } from "mongoose";

export default interface MiddlewareConfig {
    type: string,
    model: Model<any, any>,
}

