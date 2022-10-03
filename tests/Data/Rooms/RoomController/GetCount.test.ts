import { assert } from "chai";
import axios, { AxiosResponse } from "axios";

const API_URL = "http://localhost:3000/api/";

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