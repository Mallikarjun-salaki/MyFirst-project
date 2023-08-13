function turnOff(){
    var inputfield = document.getElementById("screen")
    inputfield.style.visibility ="hidden"  
}
function turnOn(){
    var inputfield = document.getElementById("screen")
    inputfield.style.visibility ="visible"  
}



function getValues(num){
    var inputValues = document.getElementById("inputnumbers")
    inputValues.value += num
    console.log(inputValues.value)
}


var inputValues = document.getElementById("inputnumbers")
function clearOneChar(){
    inputValues.value = inputValues.value.slice(0,-1)
}

function clearAll(){
    inputValues.value =""
}


function calculate(){
    inputValues.value = eval(inputValues.value)
}