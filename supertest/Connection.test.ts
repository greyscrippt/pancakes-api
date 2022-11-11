import supertest from "supertest";
import app from "../src/app";

describe("GET in endpoint /ping", () => {
    const server = supertest(app);

    it("should return 'Ok'", (done) => {
        server
            .get("/api/ping")
            .expect(200, done);
    });
});
