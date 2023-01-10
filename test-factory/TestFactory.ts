import express from "express";
import supertest from "supertest";

import RouterFactory from "../src/generators/Factories/RouterFactory";
import RouterConfig from "../src/generators/CommonTypes/RouterConfig";

const EndpointFunctions = {
    "GET": {
        "GET_ALL": () => {},
        "GET_BY_ID": () => {},
        "GET_COUNT": () => {},
    },
    "DELETE": {
        "DELETE_BY_ID": () => {},
    },
    "UPDATE": {
        "UPDATE_BY_ID": () => {},
    },
    "POST": {
        "POST_ONE": () => {},
    },
};

export function testRouter(router_config: Array<RouterConfig>) {
    const router = RouterFactory.createRoute(router_config);
    const express_app = express();

    express_app.use(router);

    const app = supertest(express_app);

    router_config.map((endpoint: RouterConfig) => {
        // EndpointFunctions.find((item: any) => item.type == type).action(model);
    });
}

export function testEndpoint(endpoint: RouterConfig, app: any) {
}
