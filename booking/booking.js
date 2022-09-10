// 1. Fetch Schedule on load
// 2. Dynamically attach data to controls
// 3. Submit booking information
// 4. Validate information
// 5. Check if terms and conditions are accepted
// 6. Navigate to payment

// 7. Once the Tickets are booked

// send

// Code start
// importing Schedule class

import { FlightSchedule } from "../Models/master.js";


window.onload = function()
{
    var indigoFlight = new FlightSchedule(
        "66E5",
        "Indigo",
        "2022-06-03",
        "3:00 PM",
        "30 min",
        "15",
        "Bangalore",
        "Delhi",
        ["Bangalore", "Delhi"],
        "₹3500",
    );

    for(let [key,value] of Object.entries(indigoFlight))
    {
        console.log(key, value);
        document.getElementById(key).innerHTML =document.getElementById(key).textContent+value;
    }
}

// // name, gender, dob, mobileNumber



