import express from "express";
import supertest from "supertest";

import RouterFactory from "../src/generators/Factories/RouterFactory";
import RouterConfig from "../src/generators/CommonTypes/RouterConfig";

export function testRouter(router_config: Array<RouterConfig>) {
    const router = RouterFactory.createRoute(router_config);
    const express_app = express();

    express_app.use(router);

    const app = supertest(express_app);

    router_config.map((endpoint: RouterConfig) => {
        if(endpoint.type == "GET") {
            it("test for a GET endpoint", () => {});
        } else if(endpoint.type == "POST") {
            it("test for a POST endpoint", () => {});
        } else if(endpoint.type == "PATCH") {
            it("test for a PATCH endpoint", () => {});
        } else if(endpoint.type == "DELETE") {
            it("test for a DELETE endpoint", () => {});
        }
    });
}

export function testEndpoint(endpoint: RouterConfig) {
}
