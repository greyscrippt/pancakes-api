import { assert, expect, should } from "chai";
import axios, { AxiosResponse } from "axios";
import "mocha";

import RoomModel from "../src/models/common/room";

const API_URL = "http://localhost:3000/api/";

const config = {
};

const client = axios(config);

describe("Connection test", () => {

    it("should return a 200 code", donne => {
        axios.get( API_URL+"ping/" )
            .then(( res ) => {
                assert.equal( res.status, 200 );
                donne();
            }).catch((err) => donne(err));
    });

    it("should return pong", donne => {
        axios
            .get( API_URL+"ping/" )
                .then(( res ) => {
                    assert.notEqual( res.data, undefined );
                    assert.equal( res.data, "pong" );

                    donne();
                })
                .catch(error => donne(error))
    });
});

describe("RoomController.getAll()", () => {

    it("should return a 200 code", donne => {
        axios.get( API_URL+"rooms/getAll" )
            .then(( res ) => {
                assert.equal( res.status, 200 );
                donne();
            }).catch((err) => donne(err));
    });


    it("should return an array of type Room", donne => {
        axios.get( API_URL+"rooms/getAll" )
            .then((res) => {
                assert.typeOf( res.data, 'array' );
                donne();
            }).catch((err) => donne(err) );
    });
});

describe("RoomController.getCount()", () => {

    it("should return a 200 code", donne => {
        axios.get( API_URL+"rooms/getCount" )
            .then(( res ) => {
                assert.equal( res.status, 200 );
                donne();
            }).catch((err) => donne(err));
    });


    it("should return a number", donne => {
        axios.get( API_URL+"rooms/getCount" )
            .then((res) => {
                assert.typeOf( res.data, 'number' );
                donne();
            }).catch((err) => donne(err) );
    });


    it("should compare results between /getCount and /getAll", donne => {
        axios.get( API_URL+"rooms/getCount" )
            .then(( res1 ) => {
                axios.get( API_URL+"rooms/getAll" )
                    .then(( res2 ) => {
                        assert.equal( res1.data, res2.data.length );

                        donne();
                    }).catch((err) => donne(err));
            }).catch((err) => donne(err));
    });
});

describe("RoomController.postOne()", () => {

    it("should return a 200 code", donne => {
        axios.post( API_URL+"rooms/post", { name: "My Very Own Test" } )
            .then(( res ) => {
                assert.equal( res.status, 200 );
                donne();
            }).catch((err) => donne(err));
    });

    it("should return a typeof 'object' with an 'id'", donne => {
        axios.post( API_URL+"rooms/post", { name: "My Very Own Test 2" } )
            .then(( res ) => {
                assert.equal( typeof res.data, "object" );
                assert.equal( typeof res.data.id, "string" );

                donne();
            }).catch((err) => donne(err));
    });
});