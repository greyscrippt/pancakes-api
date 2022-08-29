import { assert, expect } from "chai";
import axios, { AxiosResponse } from "axios";
import "mocha";

const API_URL = "http://localhost:3000/api/";

describe("Connection test", () => {
  it("should return pong", donne => {
    axios
        .get(API_URL+"ping/")
            .then((result) => {
                expect(result.data).to.equal("pong");
                donne();
            }).catch(error => donne(error));
  });
});

describe("Endpoint test for RoomController.getCount()", () => {
    it("should return true", donne => {
        axios
            .get(API_URL+"rooms/getCount")
            .then((result1) => {
                axios
                    .get(API_URL+"rooms/getAll")
                        .then((result2) => {
                            expect(result1).to.equal(result2.data.length);
                        });

                donne();
            }).catch(error => donne(error));
    });
  });

