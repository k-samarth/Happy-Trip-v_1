// import { Passanger } from "../Models/master";

import { Passanger } from "../Models/master.js";
//import { Booking_details } from "../Models/master";
// var passanger1 = new 
console.log("hello");

import { Booking_details } from "../Models/master.js";
import {PriceDetails} from "../Models/master.js";

window.onload = function()
{
    let Booking_details1 = JSON.parse(localStorage.getItem("flightScheduleOne"));
    let searchDetails = JSON.parse(localStorage.getItem("searchData"));

    console.log(Booking_details1);
    document.getElementById("From").innerHTML = Booking_details1.fromCity;
    document.getElementById("Airline").innerHTML = Booking_details1.flight;
    document.getElementById("To").innerHTML = Booking_details1.toCity;
    document.getElementById("Date").innerHTML = Booking_details1.date;
    document.getElementById("Schedule").innerHTML = Booking_details1.time;
    document.getElementById("BoardingPoint").innerHTML = Booking_details1.fromCity;
    document.getElementById("DateofBoarding").innerHTML = Booking_details1.date;
    document.getElementById("Duration").innerHTML = Booking_details1.duration;
    document.getElementById("Fare").innerHTML += parseInt(parseInt(Booking_details1.price)*(parseInt(searchDetails.adults)+parseInt(searchDetails.children)+parseInt(searchDetails.infants)));
    document.getElementById("AirlineFee").innerHTML += parseInt(parseInt(parseInt(Booking_details1.price)*(parseInt(searchDetails.adults)+parseInt(searchDetails.children)+parseInt(searchDetails.infants)))*0.1);
    document.getElementById("Cleartrip_fee").innerHTML += parseInt(parseInt(parseInt(Booking_details1.price)*(parseInt(searchDetails.adults)+parseInt(searchDetails.children)+parseInt(searchDetails.infants)))*0.01);
    document.getElementById("Total").innerHTML += parseInt(parseInt(Booking_details1.price)*(parseInt(searchDetails.adults)+parseInt(searchDetails.children)+parseInt(searchDetails.infants))) + parseInt(parseInt(parseInt(Booking_details1.price)*(parseInt(searchDetails.adults)+parseInt(searchDetails.children)+parseInt(searchDetails.infants)))*0.1) + parseInt(parseInt(parseInt(Booking_details1.price)*(parseInt(searchDetails.adults)+parseInt(searchDetails.children)+parseInt(searchDetails.infants)))*0.01);


    // for(let [key,value] of Object.entries(Booking_details1))
    // {
    //     console.log(key, value);
    //     document.getElementById(key).innerHTML =document.getElementById(key).textContent+value;
    // }


    let passanger2 = JSON.parse(localStorage.getItem("passangerData")); 
    var passanger1 = new Passanger(
        "1",
        passanger2.name,
        "22",
        passanger2.gender,
        "6A",
        "Confirmed",
       
    );

    for(let [key,value] of Object.entries(passanger1))
    {
        console.log(key, value);
        document.getElementById(key).innerHTML =document.getElementById(key).textContent+value;
    }

    document.getElementById("title").innerText=`${Booking_details1.fromCity} :: ${Booking_details1.toCity}`;
  
}