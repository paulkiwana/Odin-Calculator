let firstNumber = null;
let operator = null;
let secondNumber = null;
let shouldResetDisplay = false;

const display = document.getElementById('display');
const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const equalsButton = document.getElementById('equals');
const clearButton = document.getElementById('clear');
const decimalButton = document.querySelector('.decimal');

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (shouldResetDisplay) {
            display.textContent = '';
            shouldResetDisplay = false;
        }
        if (display.textContent === '0') {
            display.textContent = button.textContent;
        } else {
            display.textContent += button.textContent;
        }
    });
});

operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (operator !== null) {
            secondNumber = parseFloat(display.textContent);
            display.textContent = operate(operator, firstNumber, secondNumber);
            firstNumber = parseFloat(display.textContent);
            secondNumber = null;
        } else {
            firstNumber = parseFloat(display.textContent);
        }
        operator = button.textContent;
        shouldResetDisplay = true;
    });
});

equalsButton.addEventListener('click', () => {
    if (operator !== null) {
        secondNumber = parseFloat(display.textContent);
        display.textContent = operate(operator, firstNumber, secondNumber);
        firstNumber = null;
        operator = null;
        secondNumber = null;
    }
});

clearButton.addEventListener('click', () => {
    display.textContent = '0';
    firstNumber = null;
    operator = null;
    secondNumber = null;
});

decimalButton.addEventListener('click', () => {
    if (!display.textContent.includes('.')) {
        display.textContent += '.';
    }
});

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Error";
    }
    return a / b;
}

function operate(operator, a, b) {
    switch (operator) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b);
        default:
            return null;
    }
}
