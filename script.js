const output = document.getElementById('output');
const numbers = document.getElementsByClassName('number');
const operators = document.getElementsByClassName('operators');
const buttons = document.querySelectorAll('div#calculator-grid button')
let display = ""
let firstNum = ""
let array = [];
let sum;
let currentOperation = null;
console.log(buttons)

function inputOperand(operand){
    array.push(operand);
}

function buttonListener() {
    for (i=0;i<buttons.length;i++){
        buttons[i].addEventListener('click', (e) => {
            if(e.target.className == "number"){
                display += e.target.textContent
                updateDisplay(display);
            }
            else if(e.target.className == "operators"){
                currentOperation = e.target.textContent;
                inputOperand(output.textContent);
                display = "";

            }
            else if(e.target.className == "span-two equals"){
                inputOperand(output.textContent);
                updateDisplay(operate(currentOperation, parseInt(array[0]), parseInt(array[1])))
            }
        })
    }
}
buttonListener()
function updateDisplay(display){
    //take button text content and update output text content
   output.textContent = display;
}

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function operate(operator, num1, num2) {
    switch (operator) {
        case '+':
            return add(num1, num2);
            break;
        case '-':
            return subtract(num1, num2);
            break;
        case '*':
            return multiply(num1, num2);
            break;
        case '÷':
            return divide(num1, num2);
            break;
        default:
            return "Not a valid operator";
    }
}
