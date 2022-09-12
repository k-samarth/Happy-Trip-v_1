// Configuration for Search
// Load from Local Storage


// Initializing Search
function init(){

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