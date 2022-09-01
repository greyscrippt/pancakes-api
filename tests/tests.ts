import { assert, expect } from "chai";
import axios, { AxiosResponse } from "axios";
import "mocha";

const API_URL = "http://localhost:3000/api/";

const config = {
};

const client = axios(config);

describe("Connection test", () => {
  it("should return pong", donne => {
    axios
        .get(API_URL+"ping/")
            .then((result) => {
                expect(result.data).to.not.equal(undefined);
                expect(result.data).to.equal("pong");

                donne();
            })
            .catch(error => donne(error))
  });
});

describe("RoomController.getCount()", () => {
    it("should return a 200 code", donne => {
        axios.get(API_URL+"rooms/getCount")
            .then((res) => {
                assert.equal(res.status, 200);
            }).finally(() => donne() );
    });
});