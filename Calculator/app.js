//Global
let firstNumber;
let secondNumber;

function assignPrintEvent() {
    buttons = document.querySelectorAll('.numbers');
    textfield = document.querySelector('.screen');
    buttons.forEach(button => {
        button.addEventListener('click', function () {
            screenContent = document.querySelector('.screen-content');
            screenContent.textContent += button.textContent;
        });
    });
}

function assignOperationEvent() {
    operations = document.querySelectorAll('.operation');
    operations.forEach(button => {
        button.addEventListener('click', function () {
            firstNumber = parseFloat(screenContent.textContent, 10);
            operation = button.id;
            screenContent.textContent = '';
        });
    });
}

function equals() {
    equalsButton = document.querySelector('.equals');
    equalsButton.addEventListener('click', function () {
        secondNumber = parseFloat(screenContent.textContent, 10);
        console.log(operation);
        if (operation == 'add') {
            answer = firstNumber + secondNumber;
        } else if (operation == 'subtract') {
            answer = firstNumber - secondNumber;
        }

        screenContent.textContent = answer;
    });
}

assignPrintEvent();
assignOperationEvent();
equals();