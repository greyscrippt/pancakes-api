import MiddlewareConfig from "./MiddlewareConfig";

type RouterType = {
    type: string,
    uri: string,
    middleware: MiddlewareConfig,
}
export default RouterType;
