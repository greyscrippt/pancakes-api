import { assert } from "chai";
import axios, { AxiosResponse } from "axios";

const API_URL = "http://localhost:3000/api/";

describe("Connection test", async() => {
    let data: AxiosResponse<any, any>;

    beforeEach(async() => {
        data = await axios.get( API_URL+"ping" );
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