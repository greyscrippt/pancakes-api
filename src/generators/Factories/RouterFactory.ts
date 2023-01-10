import { Router } from "express";

import MiddlewareConfig from "../CommonTypes/MiddlewareConfig";
import RouterConfig from "../CommonTypes/RouterConfig";
import ControllerFactory from "./ControllerFactory";

function createMiddleware(middleware: MiddlewareConfig) {
    return ControllerFactory.create(middleware.type, middleware.model);
}

const RouterFactory = {
    createRoute(endpoints: RouterConfig[]) {
        const router = Router();

        endpoints.map(( endpoint ) => {
            // if()

            const middleware = createMiddleware(endpoint.middleware);

            if( endpoint.type == "GET" ){
                router.get(endpoint.uri, middleware);
            } else if( endpoint.type == "POST" ){
                router.post(endpoint.uri, middleware);
            } else if( endpoint.type == "PATCH" ){
                router.patch(endpoint.uri, middleware);
            } else if( endpoint.type == "DELETE" ){
                router.delete(endpoint.uri, middleware);
            } else {
                return("{'error': 'Error'}");
            }
        });

        return(router);
    }
}

export default RouterFactory;
