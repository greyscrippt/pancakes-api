import { assert } from "chai";
import axios, { AxiosResponse } from "axios";

const API_URL = "http://localhost:3000/api/";

describe("Connection test", async() => {
    let data: AxiosResponse<any, any>;

    beforeEach(async() => {
        data = await axios.get( API_URL+"ping" );
        console.log( data.data );
    });

    it("data shouldn't be of type 'undefined'", donne => {
        assert.notEqual( data, undefined );
        donne();
    });
    
    it("should return a 200 code", donne => {
        assert.equal( data.status, 200 );
        donne();
    });

    it("should return pong", donne => {
        assert.notEqual( data.data, undefined );
        assert.equal( data.data, "pong" );
        donne();
    });
});

describe("RoomController.getAll()", () => {
    let data: AxiosResponse<any, any>;

    beforeEach(async() => {
        data = await axios.get( API_URL+"rooms/getMany" );
    });

    it("data shouldn't be of type 'undefined'", donne => {
        assert.notEqual( data, undefined );
        donne();
    });

    it("should return a 200 code", donne => {
        assert.equal( data.status, 200 );
        donne();
    });


    it("should return an array of type Room", donne => {
        assert.typeOf( data.data, 'array' );
        donne();
    });
});

describe("RoomController.getCount()", () => {
    let count: AxiosResponse<any, any>;
    let count2: AxiosResponse<any, any>;

    beforeEach(async() => {
        count = await axios.get( API_URL+"rooms/getCount" );
        count2 = await axios.get( API_URL+"rooms/getMany" );
    });

    it("count shouldn't be of type 'undefined'", donne => {
        assert.notEqual( count, undefined );
        donne();
    });

    it("count2 shouldn't be of type 'undefined'", donne => {
        assert.notEqual( count2, undefined );
        donne();
    });

    it("should return a 200 code on getCount", donne => {
        assert.equal( count.status, 200 );
        donne();
    });
    

    it("should return a 200 code on getMany", donne => {
        assert.equal( count2.status, 200 );
        donne();
    });


    it("should return a number", donne => {
        assert.typeOf( count.data, 'number' );
        donne();
    });


    it("should compare results between /getCount and /getAll", async donne => {
        assert.equal( count.data, count2.data.length );

        donne();
    });
});

describe("RoomController.postOne()", async() => {
    let data: AxiosResponse<any, any>;

    beforeEach(async() => {
        data = await axios.post( API_URL+"rooms/post", { name: "My Very Own Test" } );
    });

    
    it("data shouldn't be of type 'undefined'", donne => {
        assert.notEqual( data, undefined );
        donne();
    });
    
    it("should return a 200 code", donne => {
        assert.equal( data.status, 200 );
        donne();
    });

    it("the result data should be of type 'object'", donne => {
        assert.equal( typeof data.data, "object" );
        donne();
    });

    it("the result data.id should be of type 'string'", donne => {
        assert.equal( typeof data.data.id, "string" );
        donne();
    });
});

describe("RoomController.updateById()", () => {});

describe("RoomController.deleteOne()", () => {});