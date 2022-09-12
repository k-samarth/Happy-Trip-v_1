import {FlightSchedule} from "../Models/master.js"
function searchForFlight(obj)
{
    // 10. Construct the object to call your API
    let Schedule = new FlightSchedule();
    // 11. Call the API
    async function fetchSchedule() {
        console.log("Async Call to Schedule")
        const response = await fetch(
            '../service/flightSchedules.json',
        );
        var data = await response.json(); // Extracting data as a JSON Object from the response
        console.log("Await data schedule");
        for(let i in data)
        {
            if(i.fromCity==obj.fromCity)
            {
                Schedule.push(i);
            }
        }
        
        console.log(Schedule);
    }
    fetchSchedule();
    // 12. Receive Data from API
    // 13. Handle any exceptions if got from API
    // 14. Create Flight Schedule Object Array and Fill Data
    // 15. Return File Schedule Object Array
    // 16. Return the Flight Schedules Data back to Search Manager
}

export {searchForFlight};