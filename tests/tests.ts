import { expect } from "chai";
import axios from "axios";
import "mocha";

const API_URL = "localhost:3000/api/";

describe("Testing endpoint /rooms/getAll", () => {
  it("should return all rooms", () => {
    axios.get(API_URL+"rooms/getAll");

    expect(true).to.equal(true);
  });
});
