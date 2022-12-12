import { assert } from "chai";
import supertest from "supertest";
import bcrypt from "bcrypt";

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
    const mock_user = {username: "John Constantine"+(Math.random()*1000).toString(), password: "12345678"};

    it("should return a 400 error upon sending invalid body", (done) => {
        server
            .post("/api/users/signToken")
            .send({})
            .expect(400, done);
    });

    it("should return status 401 upon sending invalid registering an account", (done) => {
        server
            .post("/api/users/register")
            .send({})
            .expect(401);
        done();
    });

    it("should return status 200 upon sending a valid register for an account", (done) => {
        server
            .post("/api/users/register")
            .send(mock_user)
            .end((err, res) => {
                assert.equal(res.body["message"], "User successfully created")
            });
        done();
    });

    it("should return status 404 upon signing an invalid account", (done) => {
        server
            .post("/api/users/signToken")
            .send({
                username: "Joe",
                password: "12433232"
            })
            .expect(404);
        done();
    });

    it("should return status 200 upon signing an account", (done) => {
        const encrypted = {
                username: mock_user.username,
                password: bcrypt.hashSync(mock_user.password, 10),
        };
        server
            .post("/api/users/signToken")
            .send(encrypted)
            .end((err, res) => {
                assert.equal(res.status, 200);
                assert.equal(JSON.stringify(res.body), JSON.stringify(encrypted));
            });
        done();
    });
});
