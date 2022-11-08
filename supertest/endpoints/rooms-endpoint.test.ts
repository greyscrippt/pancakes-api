import supertest from "supertest";
import app from "../../src/server";

describe("Testing endpoint '/rooms'", () => {
    const server = supertest(app);

    it("should return 'Ok' on POST /postOne", (done) => {
        server
            .post("/api/rooms/postOne")
            .send({ name: "testroom" })
            .expect(200, done);
    });

    it("should return 'Ok' on GET /getAll", (done) => {
        server
            .get("/api/rooms/getAll")
            .expect(200, done);
    });

    it("should return 'Ok' on GET /getCount", (done) => {
        server
            .get("/api/rooms/getCount")
            .expect(200, done);
    });

    it("should return 'Ok' on GET /getOneById", (done) => {
        server
            .get("/api/rooms/getOneById")
            .expect(200, done);
    });
});