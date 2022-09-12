import {searchInfo} from "../Models/searchInfo.js";
import {searchForFlight} from "../service/searchService.js";
import {FlightSchedule} from "../Models/master.js";
import { displaySchedules } from "./searchresults.js";
// var searchinfo1 = new searchInfo(
//     direction,
//     fromCity,
//     toCity,
//     fromDate,
//     toDate,
//     adults,
//     children,
//     infants
// );
function SearchManager(searchInfo1)
{
        console.log("Search Manager");
        // 7. Perform Validation
        console.log(searchInfo1);
        // 8. Import SearchService 
        // 9. Call SearchService -> Search for Flights Service
        searchForFlight(searchInfo1);
        
    };
    // 17. Store Flight Schedules with Manager
    // 18. Send sucess response to Controller
    var Schedules = [];
    function storeSchedule(schedule=[])
    {
        Schedules=schedule;
        console.log(Schedules);
        displaySchedules(Schedules);
        return false;
    }

export {SearchManager};
export {storeSchedule};