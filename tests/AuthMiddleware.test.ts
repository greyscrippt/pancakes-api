import supertest from "supertest";

import { createAppInstance } from "../src/app";
import { expect } from "chai";
import { v4 as uuidv4 } from "uuid"; 

const app = supertest( createAppInstance() );

const createMockUser = () => {
    return {
        username:   "test.user."        + uuidv4() as string,
        password:   "test.password."    + uuidv4() as string,
        email:      uuidv4() as string  + "@mail.com",
    };
};

const mock_user = createMockUser();

before(() => {
    it("should test user creation on endpoint POST '/api/createUser'", async() => {
        const result = await app
            .post("/api/createUser")
            .send(mock_user);
        
        expect(result.body['msg']).to.equal("Success");
        expect(result.status).to.equal(200);
    });
});

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
        const tokenRes = await app
            .post("/api/signToken")
            .send(createMockUser());

        expect(tokenRes.status).to.equal(200);
        
        const result = await app
            .get("/api/authPing")
            .set("x-access-token", tokenRes.body['x-access-token'])
            .send("ping");

        expect(result.status).to.equal(400);
        expect(result.body['msg']).to.equal("User could not be verified");
    });
    
    it("should test user creation without password field on endpoint POST '/api/createUser'", async() => {
        const mock_user_wrong = { username: "aswd12"};

        const result = await app
            .post("/api/createUser")
            .send(mock_user_wrong);
        
        expect(result.status).to.equal(400);
    });
    
    it("should test user creation without username field on endpoint POST '/api/createUser'", async() => {
        const mock_user_wrong = { password: "aswd12"};

        const result = await app
            .post("/api/createUser")
            .send(mock_user_wrong);
        
        expect(result.status).to.equal(400);
    });
    
    it("should test user creation without form data on endpoint POST '/api/createUser'", async() => {
        const result = await app
            .post("/api/createUser");
        
        expect(result.status).to.equal(400);
        expect(result.body['msg']).to.equal("No user data provided");
    });
});
