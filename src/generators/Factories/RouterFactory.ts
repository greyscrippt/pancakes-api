import { Router } from "express";

import RouteType from "../CommonTypes/RouteType";

const RouterFactory = {
    createRoute(endpoints: RouteType[]) {
        const route = Router();

        endpoints.map(( endpoint ) => {
            if( endpoint.type == "GET" ){
                route.get( endpoint.uri, endpoint.middleware );
            }
            if( endpoint.type == "POST" ){
                route.post( endpoint.uri, endpoint.middleware );
            }
            if( endpoint.type == "PATCH" ){
                route.patch( endpoint.uri, endpoint.middleware );
            }
            if( endpoint.type == "DELETE" ){
                route.delete( endpoint.uri, endpoint.middleware );
            }
            return("{'error': 'Error'}");
        });

        return(route);
    }
}

export default RouterFactory;