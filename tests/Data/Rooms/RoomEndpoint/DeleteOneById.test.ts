import { assert } from "chai";
import axios, { AxiosResponse } from "axios";

const API_URL = "http://localhost:3000/api/";

describe("Testing '/deleteOneById' endpoint", () => {
    let deleted_data: AxiosResponse<any, any>;
    let deleted_id: string;

    beforeEach(async() => {
        const sample = await axios.get( API_URL+"rooms/getAll" );

        if( !sample ) {
            throw "Data response is undefined";
        }

        if( sample.data.length == 0 ) {
            throw "Rooms is an empty array. Please populate the collection before proceding with the test"
        }

        deleted_id = sample.data[0]._id;

        deleted_data = await axios.delete( API_URL+"rooms/deleteOneById/"+deleted_id);
    });

    it("data shouldn't be of type 'undefined'", () => {
        assert.notEqual( deleted_data, undefined );
    });

    it("should return a 200 code", () => {
        assert.equal( deleted_data.status, 200 );
    });

    it("the deleted data shouldn't exist on the database", () => {
        return axios
            .get( API_URL+"rooms/getOneById/"+deleted_data.data._id )
            .then((res) => assert.isNull( res.data ))
            .catch((err) => { throw err });
    });
});
