// initialize variables
const numberBtn = document.querySelectorAll('.number-btn')
const displayScreen = document.getElementById('display')


// This function clear all the values
function clearScreen() {
    displayScreen.value = "";
}
 

// This function display values
function displayResult(value) {
    displayScreen.value += value;
}

 
// This function evaluates the expression and returns result
function calculate() {
    let calculation = displayScreen.value;
    let result = eval(calculation);
    displayScreen.value = result;
}






























