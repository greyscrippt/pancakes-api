import supertest from "supertest";

import RouterConfig from "../src/generators/CommonTypes/RouterConfig";
import app from "../src/app";
import { room_config } from "../src/routes/roomRouter";
import {expect} from "chai";

function filter_routes(config: Array<RouterConfig>, route_type: string) {
    return config.filter((item: RouterConfig) => item.middleware.type == route_type);
}

describe("test the GET_ALL routes successfully", () => {
    const test_app = supertest(app);

    it("returns 200 status", async() => {
      const sample_data = {name: "My room"};
      const res = await test_app.post("/api/rooms").send(sample_data);

      expect(res.status).to.eq(200);
    });

    it("returns 200 status", async() => {
      const res = await test_app.get("/api/rooms");

      expect(res.status).to.eq(200);
    });
});
