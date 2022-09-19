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
    }else{
        alert('Valid name given.');
    }

    if (isNaN(b)){
        alert("Enter correct card no.")
    }else if(b.length!=16){
        alert(" Card number should be 16 digits only")
    } 

    if (isNaN(e)){
        alert("Enter correct cvv.")
    }else if(e.length!=3){
        alert(" CVV should be 3 digits only ")
    }

   

}
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