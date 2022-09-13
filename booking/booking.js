// 1. Fetch Schedule on load
// 2. Dynamically attach data to controls
// 3. Submit booking information
// 4. Validate information
// 5. Check if terms and conditions are accepted
// 6. Navigate to payment

// 7. Once the Tickets are booked

// send

// Code start
// importing Schedule class

import { FlightSchedule } from "../Models/master.js";


window.onload = function()
{
    var indigoFlight = new FlightSchedule(
        "66E5",
        "Indigo",
        "2022-06-03",
        "3:00 PM",
        "30 min",
        "15",
        "Bangalore",
        "Delhi",
        ["Bangalore", "Delhi"],
        "₹3500",
    );

    for(let [key,value] of Object.entries(indigoFlight))
    {
        console.log(key, value);
        document.getElementById(key).innerHTML =document.getElementById(key).textContent+value;
    }
}

// // name, gender, dob, mobileNumber

document.getElementById("dob").max = new Date().getFullYear() + "-" +  +"0"+parseInt(new Date().getMonth() + 1 ) + "-" + new Date().getDate();


var btn=document.getElementById('bookNow');

btn.onclick=function(){
    
    let name=document.getElementById("name").value;
    let gender=document.getElementById("gender").value;
    let dob=document.getElementById("dob").value;
    let mobileNumber=document.getElementById("mobileNumber").value;
    var phone=/[0-9]{10}$/;
    var flag=0;
    var regName = /[a-z|A-Z]+$/;

    var checker=document.getElementById("tca");
   

    console.log(name.length)
    if (!form.tca.checked || name.length > 0) {
        alert("Please Indicate That You Accept The Terms And Conditions");
        form.tca.focus();
        flag=1;
        return false;
    }
   
    
    
if(!(name.length)>0||!regName.test(name))
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
  
   if(flag==0)
   {
    alert("success");
       //document.getElementById("alert1").style.display="block";

      // document.getElementById("demo").action="../booking/bookingConfirmation.html"

   }

}
