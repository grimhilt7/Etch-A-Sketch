const panel = document.querySelector('.panel');

const buttonWidth = document.querySelector('.button-set');
buttonWidth.addEventListener('click', setWidth);

const buttonColorful = document.querySelector('.button-colour-toggle');
buttonColorful.addEventListener('click', toggleColor);

function setWidth() {
  const temp = parseInt(prompt('... upto 100'), 10);
  if (temp > 100) {
    return;
  }
  panel.innerHTML = '';
  for (let i=1; i <= temp; i++) {
    const row = document.createElement('div');
    row.classList.add('row', `row-${i}`);
    for (let j=1; j <= temp; j++) {
      const col = document.createElement('div');
      col.classList.add('col', `col-${j}`);
      row.appendChild(col);
    }
    panel.appendChild(row);
  }
}

function toggleColor() {
  
}

