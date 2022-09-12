import {searchInfo} from '../Models/searchInfo.js';
import { SearchManager } from './searchmanager.js';
//accessing search control
var event = document.getElementById("search");

event.addEventListener("click",displayData)
function displayData(){
var direction = document.querySelectorAll('input[name="trip"]').value;
var fromCity = document.getElementById("fromCity").value;
  var toCity = document.getElementById("toCity").value;
  var fromDate = document.getElementById("dob").value;
//   Usage of Try & Catch
  try{
    console.log("Start Try Block");
    var toDate = document.getElementById("dob1").value;
    console.log("Completed Try Block");
  }catch{
    var toDate = 0;
    console.log("Catch was executed");
  }
  var adults = document.getElementById("Adults").value;
  var children = document.getElementById("Children").value;
  var infants = document.getElementById("Infants").value;

var searchinfo1 = new searchInfo(
    direction,
    fromCity,
    toCity,
    fromDate,
    toDate,
    adults,
    children,
    infants
);
console.log(searchinfo1);
window.localStorage.setItem("searchData", JSON.stringify(searchinfo1));

SearchManager(searchinfo1);
}