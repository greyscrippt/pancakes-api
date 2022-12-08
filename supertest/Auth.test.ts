import supertest from "supertest";
import app from "../src/app";

describe("Authentication tests", () => {
    const server = supertest(app);

    it("should return 'Ok'", (done) => {
        server
            .get("/api/signToken")
            .expect(200, done);
    });
});
