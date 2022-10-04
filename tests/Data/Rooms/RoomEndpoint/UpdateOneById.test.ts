import { assert } from "chai";
import axios, { AxiosResponse } from "axios";

const API_URL = "http://localhost:3000/api/";

describe("Testing '/updateOneById' endpoint", () => {
    let data_to_be_updated: AxiosResponse<any, any>;
    let updated_data_response: AxiosResponse<any, any>;

    beforeEach(async() => {
        const sample = await axios.get( API_URL+"rooms/getAll" );

        if( !sample ) {
            throw "Data response is undefined";
        }

        if( sample.data.length == 0 ) {
            throw "Rooms is an empty array. Please populate the collection before proceding with the test"
        }

        data_to_be_updated = await axios.get( API_URL+"rooms/getOneById/"+sample.data[0]._id );

        let updated_data_array = {"name": "Whatever New Name"};

        updated_data_response = await axios.patch(
            API_URL+"rooms/updateOneById/"+data_to_be_updated.data._id,
            updated_data_array,
        );
    });

    it("data shouldn't be of type 'undefined'", donne => {
        assert.notEqual( updated_data_response, undefined );
        donne();
    });

    it("should return a 200 code", donne => {
        assert.equal( updated_data_response.status, 200 );
        donne();
    });

    it("should update the data", donne => {
        assert.equal( updated_data_response.data.name, "Whatever New Name" );
        donne();
    });
});