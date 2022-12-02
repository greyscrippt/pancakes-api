import supertest from "supertest";

import app from "../../src/app";

describe("Testing endpoint '/users'", () => {
    const server = supertest(app);

    const rand = Math.floor(Math.random()*100000).toString();
    const random_name = "john".concat(rand);

    var token;

    const payload = {
        username: random_name,
        password: 123456,
    };

    it("should return 'Ok' on POST /register", (done) => {
        server
            .post("/api/users/register")
            .send(payload)
            .end((err, res) => {
                if(err) {
                    console.log(err);
                    return;
                }
            });
        done();
    });

    it("should return 'Ok' on POST /login", (done) => {
        server
            .post("/api/users/login")
            .send(payload)
            .end((err, res) => {
                if(err) {
                    console.log(err);
                    return;
                }
                // token = res.body;
            });
        done();
    });

    it("should return 'Ok' on POST /verifyToken", (done) => {
        server
            .post("/api/users/verifyToken")
            .send(payload)
            .end((err, res) => {
                if(err) {
                    console.log(err);
                    return;
                }
            });
        done();
    });
});
