const textinput = document.getElementById("textinput");
const celtofar = document.getElementById("celtofar");
const fartocel = document.getElementById("fartocel");
const result = document.getElementById("result");
let temp;
function convert(){
    if(celtofar.checked){
        temp = Number(textinput.value);
        temp = temp * 9 / 5 + 32;
        result.textContent = temp + `°F`;

    }
    else if(fartocel.checked){
        temp = Number(textinput.value);
        temp = (temp - 32) * (5 / 9) ; 
        result.textContent = temp + "°C"

    }
    else{
        result.textContent = "Select the Convertion Unit";
    }
}