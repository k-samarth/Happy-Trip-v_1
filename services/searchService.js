import { City } from "../Models/travel.js";
import { FlightSchedule } from "../Models/master.js";
import { receiveData } from "../search/searchmanager.js";
// import { storeSchedule } from "../search/searchmanager.js";
// var searchService = function (obj) {
//   this.getCities = function () {};
// };

// fetchSchedule();
// var schedule;
// function fetchSchedules() {
//   console.log("Fetch Schedule Here");
//   fetch("../service/flightSchedules.json")
//     .then(function (response) {
//       // console.log(fetch('flight.json'));
//       return response.json();
//     })
//     .then(function (data) {
//       schedule = data;
//       console.log(data);
//     })
//     .catch(function (err) {
//       console.log("error: " + err);
//     });
// }

// Using Async Await for API call for Airport Dropdown

var cities = [];

function fetchAirport() {
  console.log("Fetch Airport Here");

  fetch("../services/airports.json")
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
