import { FlightSchedule } from "../Models/master.js";
import {Passanger} from "../Models/master.js"

var name=document.getElementById("name").value;
    var gender=document.getElementById("gender").value;
    var dob=document.getElementById("dob").value;
    var mobileNumber=document.getElementById("mobileNumber").value;
    var phone=/[0-9]{10}$/;
    var flag=0;
    var regName = /[a-z|A-Z]+$/;

window.onload = function()
{
    var indigoFlight = JSON.parse(localStorage.getItem("flightScheduleOne"));

    console.log(indigoFlight);
    for(let [key,value] of Object.entries(indigoFlight))
    {
        console.log(key, value);
        document.getElementById(key).innerHTML =document.getElementById(key).textContent+value;
    }
}

var button = document.getElementById("bookNow");
var i=1;
var passangers = [];
button.onclick = function(){
    // if(ValidateData()){
    var search = JSON.parse(localStorage.getItem("searchData"));
    var numberPassangers = parseInt(search.adults) + parseInt(search.infants) + parseInt(search.children);
    while(i<=numberPassangers){
        var name=document.getElementById("name").value;
        var gender=document.getElementById("gender").value;
        var dob=document.getElementById("dob").value;
        var mobileNumber=document.getElementById("mobileNumber").value;

        var passanger = new Passanger(i, name, 21, gender,dob,mobileNumber);
        // localStorage.setItem(`passangerData${i}`,JSON.stringify(passanger));
        passangers.push(passanger);
        
        if(i<numberPassangers)
        {document.getElementById("numberEntered").innerText=`Passanger ${name} has been added`;
        document.getElementById("name").value = " ";
        document.getElementById("gender").value = " ";
        document.getElementById("dob").value = " ";
        document.getElementById("mobileNumber").value = " ";}
        i++;
        return false;
    };
        window.open("../payment/payment.html");
        localStorage.setItem("passangerData",JSON.stringify(passangers));
    // }

}


document.getElementById("dob").max = new Date().getFullYear() + "-" +  +"0"+parseInt(new Date().getMonth() + 1 ) + "-" + new Date().getDate();

function ValidateData(){
    if(checkBoxCheck() && checkName() && checkGender() && dobCheck() && mobileCheck()){
        return true;
    }
    return false;
}

function checkBoxCheck(){
    if (!form.checker.checked || name.length > 0) {
        alert("Please Indicate That You Accept The Terms And Conditions");
        form.checker.focus();        
        return false;
    }
    return true;
}

function checkName(){
    if(!(name.length)>0||!regName.test(name))
    {
        alert("Please enter valid  name")
        return false;
    }
    return true;
}

function checkGender(){
    if(!(gender.length)>0)
    {
       alert("Please enter the gender ")
       return false;
    }
    return true;
}

function dobCheck(){
    if(!(dob.length)>0)
   {
       alert("Please enter the DOB ")
       return false;
   }
   return true;
}

function mobileCheck(){
    if(!(mobileNumber.length>0) || isNaN(mobileNumber)||!phone.test(mobileNumber))
   {
       alert("Please enter the valid mobile number")
       flag=1;
       return false;
   }
}