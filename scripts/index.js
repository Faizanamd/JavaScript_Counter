
function increment(){
    var number = Number(document.getElementById("numberCounter").innerHTML);
   document.getElementById('numberCounter').innerHTML = number+1;
}

function decrement(){
    var number = Number(document.getElementById("numberCounter").innerHTML);
   document.getElementById('numberCounter').innerHTML = number-1;
}

function neutral(){
    var number = Number(document.getElementById("numberCounter").innerHTML);
   document.getElementById('numberCounter').innerHTML = 0;
}