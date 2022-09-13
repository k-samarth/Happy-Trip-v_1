function display1() {
    var a= document.getElementById('cardOwner').value;
    var b = document.getElementById('cardNumber').value;
    var c = document.getElementById('month').value;
    var d= document.getElementById('year').value;
    var e= document.getElementById('cvv').value;
    
    console.log(a);

    // if(isNaN(a)){
    //     alert("Enter correct card no.");
    // }else if(isNaN(d)){
    //     alert("Enter correct correct cvv");
    // }else{
    
    // alert("payment cleared")}
    var regName = /^[a-zA-Z]+ [a-zA-Z]+/;
    
    if(!regName.test(a)){
        alert('Invalid name given.');
    }else{
        alert('Valid name given.');
    }

    if (isNaN(b)){
        alert("Enter correct card no.")
    }else if(b.length!=16){
        alert("  card length is wrong ")
    }

    if (isNaN(c)){
        alert("Enter correct month.")
    }else if(c.length!=2){
        alert(" month length is wrong ")
    }

    if (isNaN(d)){
        alert("Enter correct year.")
    }else if(d.length!=4){
        alert(" Year length is wrong ")
    }

    if (isNaN(e)){
        alert("Enter correct cvv.")
    }else if(e.length!=3){
        alert(" cvv length is wrong ")
    }

   

}