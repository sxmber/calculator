//TODO

const output = document.getElementById('output');
const numbers = document.getElementsByClassName('number');
const operators = document.getElementsByClassName('operators');
const buttons = document.querySelectorAll('div#calculator-grid button')
let input = ""
total = "";
secondNum = null;
let array = [];
let currentOperation = null;

function buttonListener() {
    for (i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', (e) => {
            if (e.target.className == "number") {
                input += e.target.textContent;
                updateDisplay(input);

            }
            else if (e.target.className == "operators") {
                if (currentOperation !== null) {
                    evaluate();
                }
                currentOperation = e.target.textContent;
                inputOperand(output.textContent);
                input = "";

            }
            else if (e.target.className == "span-two equals") {
                if(secondNum == null){
                    evaluate();
                }
                
            }
            else if (e.target.className == "del") {
                input = input.slice(0, -1);
                output.textContent = input;
            }
            else if (e.target.className == "span-two clear") {
                clear();
            }
            else if (e.target.className == ".") {
                input += e.target.textContent;
                updateDisplay(input);
            }
        })
    }
}
buttonListener()

function evaluate() {
    secondNum = output.textContent;
    updateDisplay(operate(currentOperation, total, secondNum));
    currentOperation = null;

}

function inputOperand(operand) {
    total = operand;
}

function updateDisplay(display) {
    output.textContent = display;
}

function clear() {
    output.textContent = "";
    input = "";
    total = "";
    secondNum = "";
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

function operate(operation, num1, num2) {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    switch (operation) {
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
            if(num2 == 0){
                return "nah";
            }else return divide(num1, num2);
            break;
    }
}
