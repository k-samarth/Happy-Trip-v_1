function display1() {
    var a = document.getElementById('cr').value;
    var b = document.getElementById('cvv').value;
    if(isNaN(a)){
        alert("Enter correct card no.");
    }else if(isNaN(b)){
        alert("Enter correct correct cvv");
    }else{
    alert("payment cleared")}
}
