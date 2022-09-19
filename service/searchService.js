import { City } from "../Models/travel.js";
import { FlightSchedule } from "../Models/master.js";
import { receiveData } from "../search/searchmanager.js";

// Using Async Await for API call for Airport Dropdown

var cities = [];

function fetchAirport() {
  console.log("Fetch Airport Here");

  fetch("../service/airports.json")
    .then(function (response) {
      // console.log(fetch('flight.json'));
      return response.json();
    })
    .then(function (data) {
      for (let i in data.airports) {
        var option = `${data.airports[i].IATA_code}: ${data.airports[i].airport_name}, ${data.airports[i].city_name}`;
        cities.push(String(option));
      }
      sendBackData(cities);
    })
    .catch(function (err) {
      console.log("error: " + err);
    });
};

function sendBackData(city) {
  receiveData(city);
};


export { fetchAirport };
