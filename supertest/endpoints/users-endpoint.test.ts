import supertest from "supertest";

import app from "../../src/app";

describe("Testing endpoint '/users'", () => {
    const server = supertest(app);

    const rand = Math.floor(Math.random()*100000).toString();
    const random_name = "john".concat(rand);

    it("should return 'Ok' on POST /register", (done) => {
        server
            .post("/api/users/register")
            .send({ username: random_name, password: "123456" })
            .expect(200, done);
    });

    it("should return 'Ok' on POST /login", (done) => {
        server
            .post("/api/users/login")
            .send({ username: random_name, password: "123456" })
            .end((err, res) => {
                if(err) {console.log(err);return;}
                console.log(res.body);
            });
    });
});
