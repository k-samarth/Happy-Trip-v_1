import { Flight } from "../Models/master.js";
import { FlightSchedule } from "../Models/master.js";

window.onload = init;
// Initializing Search
function init() {
  let searching = JSON.parse(localStorage.getItem("searchData"));
  
  document.getElementById("direction").value = searching.direction;
  document.getElementById("fromCity").value = searching.fromCity;
  document.getElementById("toCity").value = searching.toCity;
  document.getElementById("fromDate").value = searching.fromDate;
  // document.getElementById("toDate").value=searching.toDate;
  document.getElementById("adults").value = searching.adults;
  document.getElementById("children").value = searching.children;
  document.getElementById("infants").value = searching.infants;

  // Object Creation
  var flightOne = new Flight(1, "66E3", "IndiGo");
  var flightTwo = new Flight(2, "6F4H", "Vistara");
  var flightThree = new Flight(3, "4CFW", "KingFisher");
  console.log(flightOne.name);
  var flightScheduleOne = new FlightSchedule(
    flightOne.name,
    " ",
    searching.fromDate,
    "01:00",
    "3 Hours",
    parseInt(searching.adults)+parseInt(searching.children)+parseInt(searching.infants),
    searching.fromCity,
    searching.toCity,
    "Non-Stop",
    "2546"
  );
  var flightScheduleTwo = new FlightSchedule(
    flightTwo.name,
    " ",
    searching.fromDate,
    "02:10",
    "2 Hours",
    parseInt(searching.adults)+parseInt(searching.children)+parseInt(searching.infants),
    searching.fromCity,
    searching.toCity,
    "Non-Stop",
    "2374"
    
  );
  var flightScheduleThree = new FlightSchedule(
    flightThree.name,
    " ",
    searching.fromDate,
    "06:00",
    "3 Hours",
    parseInt(searching.adults)+parseInt(searching.children)+parseInt(searching.infants),
    searching.fromCity,
    searching.toCity,
    "Non-Stop",
    "2122" 
  );



  console.log(flightScheduleOne);
console.log(flightScheduleOne.flightNumber)
  document.getElementById("flightName").innerHTML = flightScheduleOne.flight;
  document.getElementById("flightNu").innerHTML = flightScheduleOne.date;
  document.getElementById("departTime").innerHTML = flightScheduleOne.time;
  document.getElementById("duration").innerHTML = flightScheduleOne.duration;
  // document.getElementById("reachTime").innerHTML = flightScheduleOne.time+3;
  document.getElementById("price").innerHTML += flightScheduleOne.price;
  // document.getElementById("routes").innerHTML = flightScheduleOne.routes;
  document.getElementById("fCity").innerHTML = flightScheduleOne.fromCity;
  document.getElementById("tCity").innerHTML = flightScheduleOne.toCity;


  document.getElementById("flightNameTwo").innerHTML = flightScheduleTwo.flight;
  document.getElementById("flightNumberTwo").innerHTML = flightScheduleTwo.date;
  document.getElementById("departTimeTwo").innerHTML = flightScheduleTwo.time;
  document.getElementById("durationTwo").innerHTML = flightScheduleTwo.duration;
  // document.getElementById("reachTimeTwo").innerHTML = flightScheduleTwo.reachTime;
  document.getElementById("priceTwo").innerHTML += flightScheduleTwo.price;
//   document.getElementById("routesTwo").innerHTML = flightScheduleTwo.routes;
  document.getElementById("fCityTwo").innerHTML = flightScheduleTwo.fromCity;
  document.getElementById("tCityTwo").innerHTML = flightScheduleTwo.toCity;

  document.getElementById("flightNameThree").innerHTML = flightScheduleThree.flight;
  document.getElementById("flightNumberThree").innerHTML = flightScheduleThree.date;
  document.getElementById("departTimeThree").innerHTML = flightScheduleThree.time;
  document.getElementById("durationThree").innerHTML = flightScheduleThree.duration;
  // document.getElementById("reachTimeThree").innerHTML = flightScheduleThree.reachTime;
  document.getElementById("priceThree").innerHTML += flightScheduleThree.price;
//   document.getElementById("routesThree").innerHTML = flightScheduleThree.routes;
  document.getElementById("fCityThree").innerHTML = flightScheduleThree.fromCity;
  document.getElementById("tCityThree").innerHTML = flightScheduleThree.toCity;

  document.getElementById("bookOne").onclick = function () {
    localStorage.setItem(
      "flightScheduleOne",
      JSON.stringify(flightScheduleOne)
    );
      window.open("../booking/booking.html");
  };

  document.getElementById("bookTwo").onclick = function () {
    localStorage.setItem(
      "flightScheduleOne",
      JSON.stringify(flightScheduleTwo)
    );
    window.open("../booking/booking.html");
  };

  document.getElementById("bookThree").onclick = function () {
    localStorage.setItem(
      "flightScheduleOne",
      JSON.stringify(flightScheduleThree)
    );
    window.open("../booking/booking.html");
  };
}
