import supertest from "supertest";

import { createAppInstance } from "../src/app";
import { expect } from "chai";
import logger from "../src/logging/logger";

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
    
    it("should test verified users on endpoint POST '/api/authPing'", async() => {
        const tokenRes = await app
            .post("/api/signToken")
            .send(mock_user);

        expect(tokenRes.status).to.equal(200);
        
        const result = await app
            .get("/api/authPing")
            .set("x-access-token", tokenRes.body['x-access-token'])
            .send("ping");

        expect(result.body).to.equal("authPong");
    });
    
    it("should test unverified users on endpoint POST '/api/authPing'", async() => {
        const mock_user_wrong = { username: "aswd12", password: "sdnjoiq" };

        const tokenRes = await app
            .post("/api/signToken")
            .send(mock_user_wrong);

        expect(tokenRes.status).to.equal(200);
        
        const result = await app
            .get("/api/authPing")
            .set("x-access-token", tokenRes.body['x-access-token'])
            .send("ping");
        expect(result.status).to.equal(400);
        expect(result.body['msg']).to.equal("User could not be verified");
    });
});
