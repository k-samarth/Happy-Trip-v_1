// Implement 
// 1. Hardcoded Search
// 2. Attach Function Dynamically to Button Object
// 3. Event Listners

// Deliverable
// 1. It should Run.
// 2. Code with Comments.
// 3. Workflow Rules Testcases in the document and code.
// 4. Solution -> a. class, b. function object, c. javascript object.
// 5. Lovely, Beautiful and Professional UI.
// 6. Agenda, Welcome, Problem, Solution, Key highlights, best practices.

//Configuaration for search
var OneWayDefaultDirection =true;
var noOfAdults =9;
var noOfChildren=9;
var noOfInfants=5;
//Initializing Search
function init()
{
    //1.Have oneway preselected
    setDefautValueForTravelDirection(OneWayDefaultDirection);

    //2.Get cities
loadCities();
    //3.Get no of adults

    //4.Get no of children

    //5.Get no of infants

    //6.Get flight class

    //7.Get airline for preference

    //8.disbale before todays date

    //9.enable date range criteria for search

    //10.
}
//Set default value for travel direction
function setDefautValueForTravelDirection(defaultValue)
{
    //Access the radio button and make it checked 

}
function loadCities(){

}





const swapBtn = document.getElementById('swap')

swapBtn.addEventListener("click", function (e) {

    e.preventDefault();

    var tmp = document.getElementById("fromCity").value;

document.getElementById("fromCity").value = document.getElementById("toCity").value;

document.getElementById("toCity").value = tmp;

})
var btn=document.getElementById('search');

document.getElementById("dob").min = new Date().getFullYear() + "-" +  +"0"+parseInt(new Date().getMonth() + 1 ) + "-" + new Date().getDate();
btn.onclick=function()
    
{

var flag=0;
var from=document.getElementById("fromCity");
var to=document.getElementById("toCity");
var dob=document.getElementById("dob");
var oneWay=document.getElementById("OneWay");
if(from.value==to.value)
{
    alert("Enter a valid city");
    flag=1;
    return;
}
var choice=document.getElementById("Class");
if(choice.value=="")
{
    flag=1;
    return;
}
var airline=document.getElementById("airline");
if(airline.value=="" )
{
    flag=1;
    return;
}
if(from.value==0 )
{
    flag=1;
    return;
}
if(getOption())
{
    flag=1;
    return;
}
if(!flag )
{
    alert("success");
}

}

// Using Async Await for API call for Airport Dropdown
async function fetchAirport() {
    console.log("Async Call 1")
	const response = await fetch(
		'../service/airports.json',
	);
	const data = await response.json(); // Extracting data as a JSON Object from the response
    console.log("Await data display 1");
    for(let i in data.airports){
        var x = document.getElementById("fromCity");
        var option = document.createElement("option")
        option.text = data.airports[i].IATA_code+" : "+ data.airports[i].airport_name+", "+ data.airports[i].city_name;
        x.add(option);
    }
}
fetchAirport();
// function fetchAirport()
// {
//     console.log("Fetch Airport Here");
    
//     fetch('../service/airports.json')
//             .then(function (response) {
//                 // console.log(fetch('flight.json'));
//                 return response.json();
                
//             })
//             .then(function (data) {
//                 for(let i in data.airports){
//                     var x = document.getElementById("fromCity");
//                     var option = document.createElement("option")
//                     option.text = data.airports[i].IATA_code+" : "+ data.airports[i].airport_name+", "+ data.airports[i].city_name;
//                     x.add(option);
//                 }
//             })
//             .catch(function (err) {
//                 console.log('error: ' + err);
//             });
// }
// fetchAirport()

// Using Async Await for API call for Airport Dropdown
async function fetchAirportTo() {
    console.log("Async Call 2")
	const response = await fetch(
		'../service/airports.json',
	);
	const data = await response.json(); // Extracting data as a JSON Object from the response
    console.log("Await data display 2");
    for(let i in data.airports){
        var x = document.getElementById("toCity");
        var option = document.createElement("option")
        option.text = data.airports[i].IATA_code+" : "+ data.airports[i].airport_name+", "+ data.airports[i].city_name;
        x.add(option);
    }
}
fetchAirportTo();
console.log("Outside Async Await");
// function fetchAirportTo()
// {
//     // console.log("Fetch Airport Here");
//     fetch('../service/airports.json')
//             .then(function (response) {
//                 // console.log(fetch('flight.json'));
//                 return response.json();
                
//             })
//             .then(function (data) {
//                 for(let i in data.airports){
//                     var x = document.getElementById("toCity");
//                     var option = document.createElement("option")
//                     option.text = data.airports[i].IATA_code+" : "+ data.airports[i].airport_name+", "+ data.airports[i].city_name;
//                     x.add(option);
//                 }
//             })
//             .catch(function (err) {
//                 console.log('error: ' + err);
//             });
// }
// fetchAirportTo()

// Disable The Arrive On for Round Trip
var arriveOn1 = document.querySelector(".arriveOn1")
arriveOn1.addEventListener("click", disableArriveOn);
function disableArriveOn()
{
    document.getElementById("disable").innerHTML="";
}

// Enable The Arrive On for One Way
var arriveOn = document.querySelector(".arriveOn")
arriveOn.addEventListener("click", enableArriveOn);
function enableArriveOn()
{
    document.getElementById("disable").innerHTML=`<label for="exampleFormControlInput1" id="arriveOn">Return on </label>
    <input type="date" class="form-control" id="dob1">`;
    document.getElementById("dob1").min = new Date().getFullYear() + "-" +  +"0"+parseInt(new Date().getMonth() + 1 ) + "-" + new Date().getDate();

}


function getOption() {
    var selectElement1 = document.querySelector('#Adults');
    var output1 = selectElement1.value;
    var selectElement2 = document.querySelector('#Children');
    var output2 = selectElement2.value;
    var selectElement3 = document.querySelector('#Infants');
    var output3 = selectElement3.value;
    var total = parseInt(output1)+parseInt(output2)+parseInt(output3);
    console.log(total);
    if(total>=10)
    {
        console.log(total);
        alert("You can only book maximum 9 ticket at once!!")
        return true;
    }
    if(output1<output3)
    {
        alert("You can only book maximum 9 ticket at once!!")
        return true;
    }
    return false;
}
// import {SearchInfo} from '../Models/' 
// function Search()
// {
//     // 1. Validate data Entered in the form
//     // 2. Implement Rules in Seperate Functions
//     // 3. If Valid: Import Classes Needed
    
//     // 4. Create an Model for SearchInfo
//     // 5. Fill information for SearchInfo
//     // 6. Call the SearchManager -> Searchfunction
//     // 19. Upon success redirect to Search Results.
//     validateSearchInfo();
// }
// function validateSearchInfo(searchInfo)
// {
//     validateLocation();
    
//     validateTravelDates();
    
//     validateNumberofTickets();
// }
// function validateLocation()
// {

// }
// function validateTravelDates()
// {

// }
// function validateNumberofTickets()
// {

// }

// Function to add Airport 

// Axios Not Working!!!

// function getTodos() {
//     // axios({
//     //   method: 'get',
//     //   url: 'https://jsonplaceholder.typicode.com/todos',
//     //   params: {
//     //     _limit: 5
//     //   }
//     // })
//     //   .then(res => showOutput(res))
//     //   .catch(err => console.error(err));
//     console.log("Inside Axios");
//     axios
//       .get('../service/flights.json', {
//         timeout: 5000
//       })
//       .then(res => console.log(res))
//       .then(data => console.log(data))
//       .catch(err => console.error(err));
//   }

//   getTodos();

//   function addTodo() {
//     console.log("Function post")
//     axios
//       .post('../service/flights.json', {
//         "id":5,
//         "number":"6ESS9",
//         "name": "AI6234",
//         "flightCapacity": 60,
//         "airline": "AirIndia"
//       })
//       .then(res => showOutput(res))
//       .catch(err => console.error(err));
//   }
//   addTodo();