import express from "express";
import supertest from "supertest";

import RouterFactory from "../src/generators/Factories/RouterFactory";
import RouteType from "../src/generators/CommonTypes/RouteType";

export function testRoute(route: Array<RouteType>) {
    const router = RouterFactory.createRoute(route);
    const express_app = express();

    express_app.use(router);

    const app = supertest(express_app);


}

export function testEndpoint(endpoint: RouteType) {
}
