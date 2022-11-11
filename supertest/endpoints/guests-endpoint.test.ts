import { assert } from "chai";
import supertest from "supertest";

import app from "../../src/app";

describe("Testing endpoint '/guests'", () => {
    const server = supertest(app);

    it("should return 'Ok' on POST /postOne", async() => {
        const res = await server
            .post("/api/guests/postOne")
            .send({ name: "Test Guest" })
            .expect(200);
        
        assert.exists(res.body.id);
    });

    it("should return 'Ok' on GET /getAll", async () => {
        const res = await server
            .get("/api/guests/getAll")
            .expect(200);

        assert.equal(typeof res.body, "object");
        assert.exists(res.body[0]);
    });

    it("should return 'Ok' on GET /getCount", async () => {
        const res = await server
            .get("/api/guests/getCount")
            .expect(200);

        assert.equal(typeof res.body, "number");
    });

    it("should return 'Ok' on GET /getOneById", async () => {
        const data = await server.get("/api/guests/getAll");
        const res = await server
            .get("/api/guests/getOneById/" + data.body[0]._id)
            .expect(200);

        assert.equal(typeof res.body, "object");
        assert.exists(res.body._id);
        assert.exists(res.body.name);
    });

    it("should return 'Ok' on PATCH /updateOneById", async () => {
        const data = await server.get("/api/guests/getAll");

        const res = await server
            .patch("/api/guests/updateOneById/" + data.body[0]._id)
            .send({ name: "New name" })
            .expect(200);

        assert.equal(typeof res.body, "object");
        assert.exists(res.body._id);
    });

    it("should return 'Ok' on DELETE /deleteOneById", async () => {
        const data = await server.get("/api/guests/getAll");

        const res = await server
            .delete("/api/guests/deleteOneById/" + data.body[0]._id)
            .expect(200);

        assert.equal(typeof res.body, "object");
        assert.exists(res.body._id);
    });
});
