import { assert, expect } from "chai";
import axios, { AxiosResponse } from "axios";
import "mocha";

const API_URL = "http://localhost:3000/api/";

describe("Connection test", () => {
  it("should return pong", donne => {
    axios.get(API_URL+"ping/")
        .then((result) => {
            expect("pong").to.equal(result.data);
            donne();
        }).catch(error => donne(error));
  });
});
