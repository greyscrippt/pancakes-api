import { room_config } from "../src/routes/roomRouter";

import express from "express";
import supertest from "supertest";

import RouterFactory from "../src/generators/Factories/RouterFactory";
import RouterConfig from "../src/generators/CommonTypes/RouterConfig";

function filter_routes(config: Array<RouterConfig>, route_type: string) {
    return config.filter((item: RouterConfig) => item.middleware.type == route_type);
}

describe("Should test the 'RouterFactory.create' function", () => {
    const router = RouterFactory.createRoute(room_config);
    const express_app = express();

    express_app.use(router);

    const test_app = supertest(express_app);

    it("should test the POST_ONE routes successfully", () => {
        const routes = filter_routes(room_config, "POST_ONE");
    });

    it("should test the GET_ALL routes successfully", () => {
        const routes = filter_routes(room_config, "GET_ALL");
    });

    it("should test the GET_BY_ID routes successfully", () => {
        const routes = filter_routes(room_config, "GET_BY_ID");
    });

    it("should test the UPDATE_BY_ID routes successfully", () => {
        const routes = filter_routes(room_config, "UPDATE_BY_ID");
    });

    it("should test the DELETE_BY_ID routes successfully", () => {
        const routes = filter_routes(room_config, "DELETE_BY_ID");
    });
});
