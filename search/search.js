import {searchInfo} from '../Models/searchInfo.js';
import { fetchCity } from "../search/searchManager.js";

// Configuration for Search
var oneWayDefaultDirection = true;
var numberOfAdults = 9;
var numberOfChildren = 9;
var numberOfInfants = 5;

// Variables for Program
var OneWay = document.getElementById("OneWay");
var fromCity = document.getElementById("fromCity");
var swapBtn = document.getElementById("swap");
var toCity = document.getElementById("toCity");
var departDate = document.getElementById("dob");
var arriveOn = document.querySelector(".arriveOn");
var arriveOn1 = document.querySelector(".arriveOn1");
var choice = document.getElementById("Class");
var airline = document.getElementById("airline");
var btn = document.getElementById("search");
var option = document.createElement("option");

// Event Listners
window.onload = init();
swapBtn.addEventListener("click", swapCity);
arriveOn.addEventListener("click", enableArriveOn);
arriveOn1.addEventListener("click", disableArriveOn);
btn.addEventListener("click", validateFields);

var cityList = [];
var dataFlag = 1;
// Initializing Search
function init() {
  setDefaultValueTravelDirection(oneWayDefaultDirection);
  fetchCity();
  // fetchAirportTo();
  setMinDate();
}
// Set default value for travel direction
function setDefaultValueTravelDirection(defaultValue) {
  // Access the radio button control and make it checked
  OneWay.checked = defaultValue;
}

function setMinDate() {
  departDate.min =
    new Date().getFullYear() +
    "-" +
    +"0" +
    parseInt(new Date().getMonth() + 1) +
    "-" +
    new Date().getDate();
}

function swapCity() {
  // e.preventDefault();
  var temp;
  temp=fromCity.value;
  fromCity.value = toCity.value;
  toCity.value = temp;
}

var flag = 0;
function validateFields() {
  if (checkSameCity()) {
    flag = 1;
    return false;
  }
  if (emptyClass()) {
    flag = 1;
    return false;
  }
  if (emptyAirline()) {
    flag = 1;
    return false;
  }
  if (emptyFromCity()) {
    flag = 1;
    return false;
  }
  if (getOption()) {
    flag = 1;
    return false;
  }
  if (!flag) {
    console.log("In Sucess");
    // alert("Success");

    // Store in Object
    var checked = document.querySelector('input[type="radio"][name="trip"]:checked').value;
    var fromCitySelect = document.querySelector('#fromCity').value;
    var toCitySelect = document.querySelector('#toCity').value;
    var departDateSelect = document.getElementById("dob").value;
    try
    {
        var arriveDateSelect = document.getElementById("dob1").value;
    }
    catch{
        var arriveDateSelect = 0;
    }
    var adults = document.querySelector('#Adults').value;
    var children = document.querySelector('#Children').value;
    var infants = document.querySelector('#Infants').value;
    var seatClass = document.querySelector('#Class').value;
    var airlineSelect = document.querySelector('#airline').value;
    console.log(departDate);
    var searching = new searchInfo(
        checked,
        fromCitySelect,
        toCitySelect,
        departDateSelect,
        arriveDateSelect,
        adults,
        children,
        infants,
        seatClass,
        airlineSelect
    );
    
    localStorage.setItem("searchData",JSON.stringify(searching));
    
    // document.getElementById("SearchForm").action = "../search/searchresults.html";
        window.open("../search/success.html");
  }
}

function checkSameCity() {
  if (fromCity.value == toCity.value) {
    alert("Enter a valid city");
    return true;
  }
  return false;
}

function emptyClass() {
  if (choice.value == "") {
    alert("Enter a valid Class of Seat");
    return true;
  }
  return false;
}

function emptyAirline() {
  if (airline.value == "") {
    alert("Enter a valid Airline");
    return true;
  }
  return false;
}

function emptyFromCity() {
  if (fromCity.value == 0) {
    alert("Enter a valid FromCity");
    return true;
  }
  return false;
}

function getOption() {
  var selectElement1 = document.querySelector("#Adults");
  var output1 = selectElement1.value;
  var selectElement2 = document.querySelector("#Children");
  var output2 = selectElement2.value;
  var selectElement3 = document.querySelector("#Infants");
  var output3 = selectElement3.value;
  var total = parseInt(output1) + parseInt(output2) + parseInt(output3);
  console.log(total);
  if (total >= 10) {
    console.log(total);
    alert("You can only book maximum 9 ticket at once!!");
    return true;
  }
  if (output1 < output3) {
    alert("Every infant should have an Adult to look after!!");
    return true;
  }
  return false;
}

function enableArriveOn() {
  document.getElementById(
    "disable"
  ).innerHTML = `<label for="exampleFormControlInput1" id="arriveOn">Return on </label>
            <input type="date" class="form-control" id="dob1">`;
  document.getElementById("dob1").min =
    new Date().getFullYear() +
    "-" +
    +"0" +
    parseInt(new Date().getMonth() + 1) +
    "-" +
    new Date().getDate();
}

function disableArriveOn() {
  document.getElementById("disable").innerHTML = "";
}

// Helper Function
function receiveManager(opt = []) {
  cityList = opt;
  dataFlag = 0;
  console.log("Received In Search");
  console.log(cityList);
  for (let i in cityList) {
    var x = document.getElementById("fromCity");
    var option = document.createElement("option");
    option.text = cityList[i];
    x.add(option);
  }

  for (let i in cityList) {
    var x = document.getElementById("toCity");
    var option = document.createElement("option");
    option.text = cityList[i];
    x.add(option);
  }
}

export { receiveManager };






