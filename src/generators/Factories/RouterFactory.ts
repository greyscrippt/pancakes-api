import { Router } from "express";

import MiddlewareConfig from "../CommonTypes/MiddlewareConfig";
import RouterConfig from "../CommonTypes/RouterConfig";
import ControllerFactory from "./ControllerFactory";

function createMiddleware(middleware: MiddlewareConfig) {
    return ControllerFactory.create(middleware.type, middleware.model);
}

const RouterFactory = {
    createRoute(endpoints: RouterConfig[]) {
        const route = Router();

        endpoints.map(( endpoint ) => {
            // if()

            const middleware = createMiddleware(endpoint.middleware);

            if( endpoint.type == "GET" ){
                route.get(endpoint.uri, middleware);
            } else if( endpoint.type == "POST" ){
                route.post(endpoint.uri, middleware);
            } else if( endpoint.type == "PATCH" ){
                route.patch(endpoint.uri, middleware);
            } else if( endpoint.type == "DELETE" ){
                route.delete(endpoint.uri, middleware);
            } else {
                return("{'error': 'Error'}");
            }
        });

        return(route);
    }
}

export default RouterFactory;
