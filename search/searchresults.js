// Configuration for Search
// Load from Local Storage
import { Flight } from "../Models/master.js";
import { FlightSchedule } from "../Models/master.js";

window.onload = init;
// Initializing Search
function init() {
  let searching = JSON.parse(localStorage.getItem("searchData"));
  // direction,fromCity,toCity,fromDate,toDate,adults,children,infants
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
  var flightScheduleOne = new FlightSchedule(
    flightOne.flightName,
    searching.fromDate,
    "01:00",
    "3 Hours",
    "04:00",
    searching.adults+searching.children+searching.infants,
    searching.fromCity,
    searching.toCity,
    "₹ 2546",
    "Non-Stop"
  );
  var flightScheduleTwo = new FlightSchedule(
    flightTwo.flightName,
    searching.fromDate,
    "02:10",
    "2 Hours",
    "04:10",
    searching.adults+searching.children+searching.infants,
    searching.fromCity,
    searching.toCity,
    "₹ 2374",
    "Non-Stop"
  );
  var flightScheduleThree = new FlightSchedule(
    flightThree.flightName,
    searching.fromDate,
    "06:00",
    "3 Hours",
    "09:00",
    searching.adults+searching.children+searching.infants,
    searching.fromCity,
    searching.toCity,
    "₹ 2122",
    "Non-Stop"
  );

  console.log(flightScheduleOne);
  document.getElementById("flightName").innerHTML = flightScheduleOne.flight;
  document.getElementById("flightNumber").innerHTML = flightOne.flightNumber;
  document.getElementById("departTime").innerHTML = flightScheduleOne.departTime;
  document.getElementById("duration").innerHTML = flightScheduleOne.duration;
  document.getElementById("reachTime").innerHTML = flightScheduleOne.reachTime;
  document.getElementById("price").innerHTML = flightScheduleOne.price;
  //document.getElementById("routes").innerHTML = flightScheduleOne.routes;

  document.getElementById("flightNameTwo").innerHTML = flightScheduleTwo.flight;
  document.getElementById("flightNumberTwo").innerHTML = flightTwo.flightNumber;
  document.getElementById("departTimeTwo").innerHTML = flightScheduleTwo.departTime;
  document.getElementById("durationTwo").innerHTML = flightScheduleTwo.duration;
  document.getElementById("reachTimeTwo").innerHTML = flightScheduleTwo.reachTime;
  document.getElementById("priceTwo").innerHTML = flightScheduleTwo.price;
//   document.getElementById("routesTwo").innerHTML = flightScheduleTwo.routes;

  document.getElementById("flightNameThree").innerHTML = flightScheduleThree.flight;
  document.getElementById("flightNumberThree").innerHTML = flightThree.flightNumber;
  document.getElementById("departTimeThree").innerHTML = flightScheduleThree.departTime;
  document.getElementById("durationThree").innerHTML = flightScheduleThree.duration;
  document.getElementById("reachTimeThree").innerHTML = flightScheduleThree.reachTime;
  document.getElementById("priceThree").innerHTML = flightScheduleThree.price;
//   document.getElementById("routesThree").innerHTML = flightScheduleThree.routes;

  document.getElementById("bookOne").onclick = function () {
    localStorage.setItem(
      "flightScheduleOne",
      JSON.stringify(flightScheduleOne)
    );
    //   window.open("../booking/booking.html");
  };

  document.getElementById("bookTwo").onclick = function () {
    localStorage.setItem(
      "flightScheduleTwo",
      JSON.stringify(flightScheduleTwo)
    );
    // window.open("../booking/booking.html");
  };

  document.getElementById("bookThree").onclick = function () {
    localStorage.setItem(
      "flightScheduleThree",
      JSON.stringify(flightScheduleThree)
    );
    // window.open("../booking/booking.html");
  };
}
