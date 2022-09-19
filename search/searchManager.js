import { fetchAirport } from "../service/searchService.js";
import { receiveManager } from "./search.js";

var getCity = [];
function fetchCity()
{
    console.log("In Manager");
    getCity = fetchAirport();
    console.log("Sending from Manager");
    console.log(getCity);
    return getCity;
};

function receiveData(city){
    getCity = city;
    console.log("Manager");
    console.log(city);
    receiveManager(getCity);
}

export { fetchCity };
export { receiveData };