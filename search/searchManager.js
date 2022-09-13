// import {searchInfo} from "../Models/searchInfo.js";

// import {searchForFlight} from "../service/searchService.js";
// import {FlightSchedule} from "../Models/master.js";
// import { displaySchedules } from "./searchresults.js";

// var searchService = new SearchService();

// var SearchManager = function (){
//         console.log("Search Manager");

//         this.getCities = function(){
//             return searchService.getCities();
//         } 
        
//         // 7. Perform Validation
//         console.log(searchInfo1);
//         // 8. Import SearchService 
//         // 9. Call SearchService -> Search for Flights Service
//         searchForFlight(searchInfo1);
        
//     };
//     // 17. Store Flight Schedules with Manager
//     // 18. Send sucess response to Controller
//     var Schedules = [];
//     function storeSchedule(schedule=[])
//     {
//         Schedules=schedule;
//         console.log(Schedules);
//         displaySchedules(Schedules);
//         return false;
//     }

// export {SearchManager};
// export {storeSchedule};

import { fetchAirport } from "../service/searchService.js";

function fetchCity()
{
    var getCity = [];
    getCity = fetchAirport();
    console.log(getCity);

    return getCity;
};

export { fetchCity };