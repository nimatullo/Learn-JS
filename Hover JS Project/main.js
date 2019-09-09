let clearButton = document.querySelector('button');
clearButton.addEventListener('click', (e) => {
  clearScreen();
});

function populate() {
  let newDiv;
  let container = document.getElementById('container');
  for (let i = 1; i < 257; i++) {
    newDiv = document.createElement('div');
    newDiv.setAttribute('id', 'colorchanger');
    newDiv.style.height = "20px";
    container.appendChild(newDiv);
  }
  addEvents();
}

function addEvents() {
  const divs = document.querySelectorAll('#colorchanger');

  divs.forEach((colorchanger) => {
    colorchanger.addEventListener('onhold' , (e) => {
      colorchanger.style.backgroundColor = "red";
    })
  })
}

function clearScreen() {
  const divs = document.querySelectorAll('#colorchanger');

  divs.forEach((colorchanger) => {
    colorchanger.style.backgroundColor = "white";
  })
}

document.onload = populate();