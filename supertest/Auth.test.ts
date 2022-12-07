import supertest from "supertest";
import app from "../src/app";

describe("Testing Auth endpoint", () => {
    const server = supertest(app);

    it("should generate token from 'generateToken' function", () => {
    });
});
