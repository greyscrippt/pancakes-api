import MiddlewareConfig from "./MiddlewareConfig";

export default interface RouterType {
    type: string,
    uri: string,
    middleware: MiddlewareConfig,
};
