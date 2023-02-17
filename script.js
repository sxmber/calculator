const output = document.getElementById('output');
const numbers = document.getElementsByClassName('number');
console.log(numbers[0].textContent)
let display;

displayNumbers();

function displayNumbers(){
    //take button text content and update output text content
    for (i=0;i<numbers.length;i++){
        numbers[i].addEventListener('click', (e) => {
            console.log(e.target.textContent)
            output.textContent += e.target.textContent;
        })
        
    }
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
        case 'add':
            return add(num1, num2);
            break;
        case 'subtract':
            return subtract(num1, num2);
            break;
        case 'multiply':
            return multiply(num1, num2);
            break;
        case 'divide':
            return divide(num1, num2);
            break;
        default:
            return "Not a valid operator";
    }
}
