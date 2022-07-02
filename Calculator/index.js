const digit0 = document.querySelector('#digit0');
const digit1 = document.querySelector('#digit1');
const digit2 = document.querySelector('#digit2');
const digit3 = document.querySelector('#digit3');
const digit4 = document.querySelector('#digit4');
const digit5 = document.querySelector('#digit5');
const digit6 = document.querySelector('#digit6');
const digit7 = document.querySelector('#digit7');
const digit8 = document.querySelector('#digit8');
const digit9 = document.querySelector('#digit9');
const multiply = document.querySelector('#multiply');
const equals = document.querySelector('#equals');
const result = document.querySelector('#result');
const add = document.querySelector('#add')

let firstNumber = 0;
let secondNumber = 0;
let operation = '';
let startBuildingSecondNumber = false;

function buildNumber(digit) {
    if(startBuildingSecondNumber) {
        secondNumber = secondNumber * 10 + digit;
        result.innerHTML = firstNumber;
    } else {
    firstNumber = firstNumber * 10 + digit;
    result.innerHTML = firstNumber;
    }
}

function handleMultiplyClick() {
    operation = 'multiply';
    startBuildingSecondNumber = true;
}

function handleAddClick() {
    operation = 'add';
    startBuildingSecondNumber = true;
}

function handleSubtractClick() {
    operation = 'subtract';
    startBuildingSecondNumber = true;
}

function handleEqualsClick() {
    // if (operation === 'multiply') {
    //     const multiplication = firstNumber * secondNumber;
    //     result.innerHTML = multiplication;
    // } else if (operation === 'add') {
    //     const sum = firstNumber + secondNumber;
    //     result.innerHTML = sum;
    // }

    switch (operation) {
        case 'multiply':
            const multiplication = firstNumber * secondNumber;
            result.innerHTML = multiplication;
            break;
        case 'add':
            const sum = firstNumber + secondNumber;
            result.innerHTML = sum;
            break;
        case 'subtract':
            const subtraction = firstNumber - secondNumber;
            result.innerHTML = subtraction;
            break;
    }
     // reset calculator
     firstNumber = 0;
     secondNumber = 0;
     operation = '';
     startBuildingSecondNumber = false;
 
}

    // reset calculator
    firstNumber = 0;
    secondNumber = 0;
    operation = '';
    startBuildingSecondNumber = false;

digit0.addEventListener('click', function(){
    buildNumber(0)
});
digit1.addEventListener('click', function(){
    buildNumber(1)
});
digit2.addEventListener('click', function(){
    buildNumber(2)
});
digit3.addEventListener('click', function(){
    buildNumber(3)
});
digit4.addEventListener('click', function(){
    buildNumber(4)
});
digit5.addEventListener('click', function(){
    buildNumber(5)
});
digit6.addEventListener('click', function(){
    buildNumber(6)
});
digit7.addEventListener('click', function(){
    buildNumber(7);
});
digit8.addEventListener('click', function(){
    buildNumber(8);
});
digit9.addEventListener('click', function(){
    buildNumber(9);
});

multiply.addEventListener('click', handleMultiplyClick);
equals.addEventListener('click', handleEqualsClick);
add.addEventListener('click', handleAddClick);
subtract.addEventListener('click', handleSubtractClick);
