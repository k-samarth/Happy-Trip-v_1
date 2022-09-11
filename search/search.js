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
var a=document.getElementById("Adults");

var b=document.getElementById("Children");
var c=document.getElementById("Infants");
var to=document.getElementById("toCity");
var dob=document.getElementById("dob");
var oneWay=document.getElementById("OneWay");
if(from.value==to.value)
{
    alert("Enter a valid city");
    flag=1;
    return;
}
var choice=document.getElementById("choice");
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
var sum=parseInt(a.value)+parseInt(b.value)+parseInt(c.value);


console.log(sum);
if(sum>9)
{
    alert("No of pass")  
}
if(!flag )
{
    alert("success");
}
}

function fetchAirport()
{
    console.log("Fetch Airport Here");
    fetch('../service/airports.json')
            .then(function (response) {
                // console.log(fetch('flight.json'));
                return response.json();
                
            })
            .then(function (data) {
                for(let i in data.airports){
                    var x = document.getElementById("fromCity");
                    var option = document.createElement("option")
                    option.text = data.airports[i].IATA_code+" : "+ data.airports[i].airport_name+", "+ data.airports[i].city_name;
                    x.add(option);
                }
            })
            .catch(function (err) {
                console.log('error: ' + err);
            });
}
fetchAirport()

function fetchAirportTo()
{
    // console.log("Fetch Airport Here");
    fetch('../service/airports.json')
            .then(function (response) {
                // console.log(fetch('flight.json'));
                return response.json();
                
            })
            .then(function (data) {
                for(let i in data.airports){
                    var x = document.getElementById("toCity");
                    var option = document.createElement("option")
                    option.text = data.airports[i].IATA_code+" : "+ data.airports[i].airport_name+", "+ data.airports[i].city_name;
                    x.add(option);
                }
            })
            .catch(function (err) {
                console.log('error: ' + err);
            });
}
fetchAirportTo()

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


