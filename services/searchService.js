import { City } from "../Models/travel.js";
import {FlightSchedule} from "../Models/master.js"
// import { storeSchedule } from "../search/searchmanager.js";
var searchService = function (obj){

    this.getCities = function(){
        // Get data from API
        var city1 = new City(1,"BLR", "Bangalore");
        var city2 = new City(1,"DEL", "Delhi");
        var city3 = new City(1,"MUM", "Mumbai");

        var cities = new Array();
        cities.push(city1);
        cities.push(city2);
        cities.push(city3);

        return cities;
    };
    // 10. Construct the object to call your API
    var requiredSchedule = [];
    // 11. Call the API
    // async function fetchSchedule() {
    //     console.log("Async Call to Schedule")
    //     const response = await fetch(
    //         '../service/flightSchedules.json',
    //     );
    //     var data = await response.json(); // Extracting data as a JSON Object from the response
        
    //     console.log("Await data schedule");
    //     console.log(data);
    //     storeSchedule(data);
    // }
}
    // fetchSchedule();
    var schedule;
    function fetchSchedules()
{
    console.log("Fetch Schedule Here");
    fetch('../service/flightSchedules.json')
            .then(function (response) {
                // console.log(fetch('flight.json'));
                return response.json();
                
            })
            .then(function (data) {
                schedule=data;
                console.log(data);
            })
            .catch(function (err) {
                console.log('error: ' + err);
            });

}

fetchSchedules();
console.log(schedule);
// storeSchedule(schedule);
    // 12. Receive Data from API
    // 13. Handle any exceptions if got from API
    // 14. Create Flight Schedule Object Array and Fill Data
    // 15. Return File Schedule Object Array
    // 16. Return the Flight Schedules Data back to Search Manager
export {fetchSchedules}
export {searchForFlight};