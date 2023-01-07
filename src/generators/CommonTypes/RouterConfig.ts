import {Model} from "mongoose";

interface MiddlewareConfig {
    type: string,
    model: Model<any, any>
}

interface RouterType {
    type: string,
    uri: string,
    middleware: any,
}

export default RouterType;
