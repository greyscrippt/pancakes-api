import supertest from "supertest";

import { createAppInstance } from "../src/app";
import { expect } from "chai";

const app = supertest( createAppInstance() );
const mock_user = { username: "nelson", password: "nelson" };

describe("Testing authentication middleware", async() => {
    it("should test endpoint GET '/api/ping'", async() => {
        await app.get("/api/ping").then((res) => {
            expect( res.status  ).to.equal(200);
            expect( res.body    ).to.equal("pong");
        });
    });
    
    it("should test endpoint POST '/api/signToken'", async() => {

        const res = await app
            .post("/api/signToken")
            .send(mock_user);

        expect(res.status).to.equal(200);
    });
});
