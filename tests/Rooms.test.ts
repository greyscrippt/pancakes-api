import supertest from "supertest";

import RouterConfig from "../src/generators/CommonTypes/RouterConfig";
import app from "../src/app";
import { room_config } from "../src/routes/roomRouter";
import chai from "chai";

function filter_routes(config: Array<RouterConfig>, route_type: string) {
    return config.filter((item: RouterConfig) => item.middleware.type == route_type);
}

describe("Should test the '/rooms' endpoint", () => {
    const test_app = supertest(app);

    describe("test the GET_ALL routes successfully", () => {
        const routes = filter_routes(room_config, "GET_ALL");
        const prefix = "/api/rooms"

        routes.map((endpoint: RouterConfig) => {
            it("returns status code 200", async() => {
                const data = await test_app.get(prefix + endpoint.uri);

                chai.expect(data.status).to.equal(200);
            });
        });
    });
});
