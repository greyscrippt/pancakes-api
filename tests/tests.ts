import { assert, expect } from "chai";
import axios, { AxiosResponse } from "axios";
import "mocha";

const API_URL = "http://localhost:3000/api/";

describe("Connection test", () => {
  it("should return pong", donne => {
    axios
        .get(API_URL+"ping/")
            .then((result) => {
                expect(result.data).to.not.equal(undefined);
                expect(result.data).to.equal("pong");
                donne();
            }).catch(error => donne(error));
  });
});

describe("Endpoint test for method RoomController.getCount and RoomController.getAll", () => {
    it("should return true", donne => {
        axios
            .get(API_URL+"rooms/getCount")
            .then((result1) => {
                axios
                    .get(API_URL+"rooms/getAll")
                        .then((result2) => {
                            expect(result1.data).to.not.equal(undefined);
                            expect(result2.data).to.not.equal(undefined);
                            expect(result1).to.equal(result2.data.length);
                        });

                donne();
            }).catch(error => donne(error));
    });
});

describe("Endpoint test for method RoomController.post", () => {
    it("should return true", donne => {
        const sample_room = { name: "Testname" };
        axios
            .post(API_URL+"rooms/post", sample_room)
            .then((result1) => {
                axios
                    .get(API_URL+"rooms/getOne/"+result1.data.id)
                        .then((result2) => {
                            expect(result1.data).to.not.equal(undefined);
                            expect(result2.data).to.not.equal(undefined);
                            expect(result1.data.name).to.equal(result2.data.name);
                        });

                donne();
            }).catch(error => donne(error));
    });
});

describe("Endpoint test for method RoomController.delete", () => {
    it("should return true", donne => {
        axios
            .get(API_URL+"rooms/getAll")
            .then((result1) => {
                axios
                    .delete(API_URL+"rooms/delete/"+result1.data[0].id)
                        .then((result2) => {
                            expect(result2.data)
                                .to.not.equal(undefined).and
                                .to.equal({});
                            
                        });

                donne();
            }).catch(error => donne(error));
    });
});
