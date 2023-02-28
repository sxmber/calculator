const output = document.getElementById('output');
const numbers = document.getElementsByClassName('number');
const operators = document.getElementsByClassName('operators');
const buttons = document.querySelectorAll('div#calculator-grid button')
let input = ""
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
                inputOperand(input);
                inputOperand(e.target.textContent);
                input = "";


            }
            else if (e.target.className == "span-two equals") {
                inputOperand(input);
                updateDisplay(operate(array));
            }
            else if (e.target.className == "del") {
                input = input.slice(0, -1);
                output.textContent = input;
            }
        })
    }
}
buttonListener()

function inputOperand(operand) {
    array.push(operand);
}

function updateDisplay(display) {
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

function operate(array) {
    let result = parseFloat(array[0]);
    console.log(result)
    for (i = 1; i < array.length; i = i + 2) {
        switch (array[i]) {
            case '+':
                result += parseFloat(array[i + 1]);
                break;
            case '-':
                result += parseFloat(array[i + 1]);
                break;
            case '*':
                result *= parseFloat(array[i + 1]);
                break;
            case '÷':
                result /= parseFloat(array[i + 1]);
                break;
        }
    }
    return result;

}
