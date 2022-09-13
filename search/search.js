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

// Imports
// import { SearchManager } from "./searchmanager";
// import {searchInfo} from '../Models/searchInfo.js';
import { fetchCity } from '../search/searchManager.js';

// Configuration for Search
var oneWayDefaultDirection = true;
var numberOfAdults = 9;
var numberOfChildren = 9;
var numberOfInfants = 5;

// Variables for Program
var OneWay = document.getElementById("OneWay");
var fromCity = document.getElementById("fromCity");
var swapBtn = document.getElementById('swap');
var toCity = document.getElementById("toCity");
var departDate = document.getElementById("dob");
var arriveOn = document.querySelector(".arriveOn");
var arriveOn1 = document.querySelector(".arriveOn1");
var choice = document.getElementById("Class");
var airline = document.getElementById("airline");
var btn = document.getElementById('search');

// Event Listners
window.onload = init();
swapBtn.addEventListener("click", swapCity);
arriveOn.addEventListener("click", enableArriveOn);
arriveOn1.addEventListener("click", disableArriveOn);
btn.addEventListener("click",validateFields);


// Initializing Search
function init(){
    setDefaultValueTravelDirection(oneWayDefaultDirection);
    var cityList=[];
    cityList = fetchCity();
    for(let i in cityList){
        fromCity
    }
    // fetchAirportTo();
    setMinDate();
};
// Set default value for travel direction
function setDefaultValueTravelDirection(defaultValue){
    // Access the radio button control and make it checked
    OneWay.checked=defaultValue;
}

// To Load Cities from the Database in the control for user to select
function loadCities(){
    // 1. Get Cities
    var cities = getCities();
    
    // 2. Load Cities inside Control
    assignCities(cities);
}

// Get Cities
function getCities(){
    // Get Cities from the Manager
    return searchManager.getCities();
}

// 
function assignCities(cities){
    // Take the array and construct the dropdown
    
}


        function setMinDate(){
            departDate.min = new Date().getFullYear() + "-" +  +"0"+parseInt(new Date().getMonth() + 1 ) + "-" + new Date().getDate();
        }
        
        function swapCity () {
            e.preventDefault();
            fromCity.value;
            fromCity.value = toCity.value;
            toCity.value = fromCity;
        };
        
        var flag = 0;
        function validateFields() {
            if(checkSameCity()){
                flag=1;
                return false;
            }
            if(emptyClass())
            {
                flag=1;
                return false;
            }
            if(emptyAirline())
            {
                flag=1;
                return false;
            }
            if(emptyFromCity()){
                flag=1;
                return false;
            }
            if(getOption())
            {
                flag=1;
                return false;
            }
            if(!flag)
            {
                console.log("In Sucess"); 
                alert("Success");
                // document.getElementById("SearchForm").action = "../search/searchresults.html";
            }
        }
        
        function checkSameCity(){
            if(fromCity.value==toCity.value){
                alert("Enter a valid city");
                return true;
            }
            return false;
        }
        
        function emptyClass(){
            if(choice.value==""){
                alert("Enter a valid Class of Seat");
                return true;
            }
            return false;
        }
        
        function emptyAirline(){
            if(airline.value=="" )
            {
                alert("Enter a valid Airline");
                return true;
            }
            return false;
        }
        
        function emptyFromCity(){
            if(fromCity.value==0 )
            {
                alert("Enter a valid FromCity");
                return true;
            }
            return false;
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
                alert("Every infant should have an Adult to look after!!")
                return true;
            }
            return false;
        }
        
        function enableArriveOn()
        {
            document.getElementById("disable").innerHTML=`<label for="exampleFormControlInput1" id="arriveOn">Return on </label>
            <input type="date" class="form-control" id="dob1">`;
            document.getElementById("dob1").min = new Date().getFullYear() + "-" +  +"0"+parseInt(new Date().getMonth() + 1 ) + "-" + new Date().getDate();
            
        }
        
        function disableArriveOn()
        {
            document.getElementById("disable").innerHTML="";
        }
        
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
                
                // Enable The Arrive On for One Way
                
                
                
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

// var searchManager = new SearchManager();