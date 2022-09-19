import { FlightSchedule } from "../Models/master.js";
import {Passanger} from "../Models/master.js"

window.onload = function()
{
    let indigoFlight = JSON.parse(localStorage.getItem("flightScheduleOne"));

    console.log(indigoFlight);
    for(let [key,value] of Object.entries(indigoFlight))
    {
        console.log(key, value);
        document.getElementById(key).innerHTML =document.getElementById(key).textContent+value;
    }
}

var button = document.getElementById("bookNow");
button.onclick = function(){
    //  ValidateData();
    let name=document.getElementById("name").value;
    let gender=document.getElementById("gender").value;
    let dob=document.getElementById("dob").value;
    let mobileNumber=document.getElementById("mobileNumber").value;

    var passanger = new Passanger("1", name, 21, gender,dob,mobileNumber);
    localStorage.setItem("passangerData",JSON.stringify(passanger));
}
// // name, gender, dob, mobileNumber

document.getElementById("dob").max = new Date().getFullYear() + "-" +  +"0"+parseInt(new Date().getMonth() + 1 ) + "-" + new Date().getDate();


// var btn=document.getElementById('bookNow');

// btn.onclick=
function ValidateData(){
    let name=document.getElementById("name").value;
    let gender=document.getElementById("gender").value;
    let dob=document.getElementById("dob").value;
    let mobileNumber=document.getElementById("mobileNumber").value;
    var phone=/[0-9]{10}$/;
    var flag=0;
    var regName = /[a-z|A-Z]+$/;

    if (!form.checker.checked || name.length > 0) {
        alert("Please Indicate That You Accept The Terms And Conditions");
        form.checker.focus();
        flag=1;
        
        return false;
    }
    
    else if(!(name.length)>0||!regName.test(name))
    {
        alert("Please enter valid  name")
        flag=1;
        return false;

    }
    
    else if(!(gender.length)>0)
    {
       alert("Please enter the gender ")
       flag=1;
       return false;
    }

    else if(!(dob.length)>0)
   {
       alert("Please enter the DOB ")
       flag=1;
       return false;
   }
    
   else if(!(mobileNumber.length>0) || isNaN(mobileNumber)||!phone.test(mobileNumber))
   {
       alert("Please enter the valid mobile number")
       flag=1;
       return false;
   }
   
}