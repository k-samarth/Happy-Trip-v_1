// Configuration for Search
// Load from Local Storage

window.onload=init;
// Initializing Search
function init(){
    let searching = JSON.parse(localStorage.getItem("searchData"));
    // direction,fromCity,toCity,fromDate,toDate,adults,children,infants
    document.getElementById("direction").value=searching.direction;
    document.getElementById("fromCity").value=searching.fromCity;
    document.getElementById("toCity").value=searching.toCity;
    document.getElementById("fromDate").value=searching.fromDate;
    // document.getElementById("toDate").value=searching.toDate;
    document.getElementById("adults").value=searching.adults;
    document.getElementById("children").value=searching.children;
    document.getElementById("infants").value=searching.infants;

}


// import { fetchSchedules } from "../service/searchService";
var objs = [];
// var obj = fetchSchedules()
function displaySchedules(obj=[])
{
    objs=obj;
    console.log(obj);
}

let newObject = window.localStorage.getItem("searchinfo1");
console.log(JSON.parse(newObject));
console.log(objs);
export {displaySchedules};