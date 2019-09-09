buttons = document.querySelectorAll('button');
textfield = document.querySelector('.screen');
buttons.forEach(button => {
    button.addEventListener('click', function () {
        number = document.createElement('p');
        number.textContent = button.textContent;
        textfield.appendChild(number);
    });
});