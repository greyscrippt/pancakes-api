import { assert } from "chai";
import supertest from "supertest";
import app from "../../src/app";
import TokenManager from "../../src/middleware/auth/TokenManager";

describe("Tests for authentication functions", () => {
    const token_data = { test: "123" };

    it("testing token generation and validation", () => {
        const token: any = TokenManager.generateToken(token_data);
        const verified: any = TokenManager.validateToken(token);

        assert.isOk(verified);
        assert.equal(verified.test, token_data.test);
    });
});

describe("Authentication endpoint tests", () => {
    const server = supertest(app);

    it("should return a 400 error upon invalid request", (done) => {
        server
            .post("/api/users/signToken")
            .end((err: any, res: supertest.Response) => {
                assert.equal(res.status, 400)
                console.log(res.body);
                done(err);
            });
    });
});
