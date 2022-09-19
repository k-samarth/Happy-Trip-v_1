function display1() {
    var a= document.getElementById('cardOwner').value;
    var b = document.getElementById('cardNumber').value;
    var c = document.getElementById('month').value;
    // var d= document.getElementById('year').value;
    var e= document.getElementById('cvv').value;
    
    console.log(a);

    var regName = /^[a-zA-Z]+ [a-zA-Z]+/;
    
    if(!regName.test(a)){
        alert('Invalid name given.');
    }
    else if (isNaN(b)){
        alert("Enter correct card no.")
    } 
    else if(b.length!=16){
        alert(" Card number should be 16 digits only")
    }

    // if (isNaN(c)){
    //     alert("Enter correct month.")
    // }else if(c.length!=2){
    //     alert(" month length is wrong ")
    // }

   

    else if (isNaN(e)){
        alert("Enter correct cvv.")
    }else if(e.length!=3){
        alert(" CVV should be 3 digits only ")
    }
    else{
        window.open("../payment/success.html")
    }

   

}

    var search = JSON.parse(localStorage.getItem("searchData"));
    var flight = JSON.parse(localStorage.getItem("flightScheduleOne"));
    var numberPassangers = parseInt(search.adults) + parseInt(search.infants) + parseInt(search.children);
    document.getElementById('amountToBePaid').innerText += " ₹ " +parseInt(parseInt(flight.price) * numberPassangers +parseInt(parseInt(flight.price)*0.1) + parseInt(parseInt(flight.price)*0.01));
    document.getElementById('amountToBePaid').style.color = "green";
window.onload=setMinDate();
function setMinDate() {

    month.min =
  
      new Date().getFullYear() +
  
      "-" +
  
      +"0" +
  
      parseInt(new Date().getMonth() + 1) +
  
      "-" +
  
      new Date().getDate();
  }