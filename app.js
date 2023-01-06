const panel = document.querySelector('.panel');

const buttonWidth = document.querySelector('.button-set');
buttonWidth.addEventListener('click', setWidth);

const buttonColorful = document.querySelector('.button-color-toggle');
buttonColorful.addEventListener('click', toggleColor);

const strokeMeter = document.querySelector('.stroke');

function updateStrokeMeter() {
  strokeMeter.textContent = stroke;
}

let trail = true;
let stroke = 100;

let func = setTimeout(() => {stroke = 100}, 500);
function resetStrokeTimer() {
  clearTimeout(func)
  func = setTimeout(() => {
    stroke = 100;
    updateStrokeMeter();}, 500);
}

function paint() {
  if (trail) {
    this.classList.add('trail-black');
    setTimeout(() => {this.classList.remove('trail-black')}, 1000);
  } else {
    resetStrokeTimer();
    updateStrokeMeter();
    this.style.transition = 'background-color 0s';
    this.style.backgroundColor = `hsl(${Math.floor(Math.random() * 360)}deg, ${Math.floor(Math.random() * 100)}%, ${stroke * 0.8}%)`;
    if (stroke > 0) {
      stroke -= 1;
    }
    setTimeout(() => {
      this.style.transition = '';
      this.style.backgroundColor = '';
    }, 1000);
  }
}

function setupTiles() {
  const tiles = document.querySelectorAll('.col');
  tiles.forEach(tile => {
    tile.addEventListener('mouseover', paint)
  })
};
setupTiles();

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
  setupTiles();
}

function toggleColor() {
  updateStrokeMeter();
  buttonColorful.textContent = trail ? 'Colorful' : 'Black';
  trail = !trail;
}