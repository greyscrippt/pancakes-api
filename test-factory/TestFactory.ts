import express from "express";
import supertest from "supertest";

import RouterFactory from "../src/generators/Factories/RouterFactory";
import RouterConfig from "../src/generators/CommonTypes/RouterConfig";
import { expect } from "chai";

interface EndpointInterface {
    type: string,
    callback: any,
}

interface EndpointsInterface {
    type: string,
    callbacks: Array<EndpointInterface>,
}

interface RequestData {
    uri: string,
    data?: any,
}

const EndpointFunctions: Array<EndpointsInterface> = [
    {
        "type": "GET",
        "callbacks": [
            {
                "type": "GET_ALL",
                "callback": async(app: any, data: RequestData) => {
                    const res = await app.get(data.uri);

                    expect(res.status).eq(3201);
                },
            },
            {
                "type": "GET_BY_ID",
                "callback": () => {},
            },
            {
                "type": "GET_COUNT",
                "callback": () => {},
            },
        ],
    },
    {
        "type": "DELETE",
        "callbacks": [
            {
                "type": "DELETE_BY_ID",
                "callback": () => {},
            },
        ],
    },
    {
        "type": "UPDATE",
        "callbacks": [
            {
                "type": "UPDATE_BY_ID",
                "callback": () => {},
            },
        ],
    },
    {
        "type": "POST",
        "callbacks": [
            {
                "type": "POST_ONE",
                "callback": () => {},
            },
        ],
    },
];

export function testRouter(router_config: Array<RouterConfig>) {
    const router = RouterFactory.createRoute(router_config);
    const express_app = express();

    express_app.use(router);

    const app = supertest(express_app);

    return router_config.map(async(endpoint: RouterConfig) => {
        const layer1 = EndpointFunctions
            .find((item) => item.type==endpoint.type);

        if(!layer1) return;
        if(!layer1.callbacks) return;

        const layer2 = layer1
            .callbacks
            .find((item) => item.type==endpoint.middleware.type);

        if(!layer2) return;
        if(!layer2.callback) return;

        await layer2.callback(app, endpoint.uri);
    });
}
