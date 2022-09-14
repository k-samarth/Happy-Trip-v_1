// import { Passanger } from "../Models/master";

import { Passanger } from "../Models/master.js";
//import { Booking_details } from "../Models/master";
// var passanger1 = new 
console.log("hello");

import { Booking_details } from "../Models/master.js";
import {PriceDetails} from "../Models/master.js";

window.onload = function()
{
    // var Booking_details1 = new Booking_details(
    //     "434562653167",
    //     "Bangalore",
    //     "AirIndia",
    //     "6E50/Indigo",
    //     "Delhi",
    //     "19 Sep 2022",
    //     "06:45",
    //     "bangalore",
    //     "19 Sep 2022",
    //     "4hrs",
    // );

    // flight,
    // airline,
    // date,
    // time,
    // duration,
    // seatsAvailability,
    // fromCity,
    // toCity,
    // routes = [],
    // price

    // Transaction_id,
    // From ,
    // Airline,
    // FlightNoAndName,
    // To,
    // Date,
    // Schedule,
    // BoardingPoint,
    // DateofBoarding,
    // Duration
    let Booking_details1 = JSON.parse(localStorage.getItem("flightScheduleOne"));
    console.log(Booking_details1);
    document.getElementById("From").innerHTML = Booking_details1.fromCity;
    document.getElementById("Airline").innerHTML = Booking_details1.flight;
    document.getElementById("To").innerHTML = Booking_details1.toCity;
    document.getElementById("Date").innerHTML = Booking_details1.date;
    document.getElementById("Schedule").innerHTML = Booking_details1.time;
    document.getElementById("BoardingPoint").innerHTML = Booking_details1.fromCity;
    document.getElementById("DateofBoarding").innerHTML = Booking_details1.date;
    document.getElementById("Duration").innerHTML = Booking_details1.duration;
    document.getElementById("Fare").innerHTML += parseInt(Booking_details1.price);
    document.getElementById("AirlineFee").innerHTML += parseInt(parseInt(Booking_details1.price)*0.1);
    document.getElementById("Cleartrip_fee").innerHTML += parseInt(parseInt(Booking_details1.price)*0.01);
    document.getElementById("Total").innerHTML += parseInt(Booking_details1.price)+parseInt(parseInt(Booking_details1.price)*0.1)+parseInt(parseInt(Booking_details1.price)*0.01);


    // for(let [key,value] of Object.entries(Booking_details1))
    // {
    //     console.log(key, value);
    //     document.getElementById(key).innerHTML =document.getElementById(key).textContent+value;
    // }



    var passanger1 = new Passanger(
        "1",
        "Venkat Swaminathan",
        "28",
        "Male",
        "6A",
        "Confirmed",
       
    );

    for(let [key,value] of Object.entries(passanger1))
    {
        console.log(key, value);
        document.getElementById(key).innerHTML =document.getElementById(key).textContent+value;
    }
    // var price_details1 = new PriceDetails(
    //     1200,
    //     30,
    //     10,       
    // );

    // for(let [key,value] of Object.entries(price_details1))
    // {
    //     console.log(key, value);
    //     document.getElementById(key).innerHTML =document.getElementById(key).textContent+value;
    // }
}