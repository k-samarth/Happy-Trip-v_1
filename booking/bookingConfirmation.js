// import { Passanger } from "../Models/master";

import { Passanger } from "../Models/master.js";
//import { Booking_details } from "../Models/master";
// var passanger1 = new 
console.log("hello");

import { Booking_details } from "../Models/master.js";
import {PriceDetails} from "../Models/master.js";

window.onload = function()
{
    var Booking_details1 = new Booking_details(
        "434562653167",
        "Bangalore",
        "AirIndia",
        "6E50/Indigo",
        "Delhi",
        "19 Sep 2022",
        "06:45",
        "bangalore",
        "19 Sep 2022",
        "4hrs",
    );

    for(let [key,value] of Object.entries(Booking_details1))
    {
        console.log(key, value);
        document.getElementById(key).innerHTML =document.getElementById(key).textContent+value;
    }



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
    var price_details1 = new PriceDetails(
        1200,
        30,
        10,       
    );

    for(let [key,value] of Object.entries(price_details1))
    {
        console.log(key, value);
        document.getElementById(key).innerHTML =document.getElementById(key).textContent+value;
    }
}