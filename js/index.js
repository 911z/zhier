const position = '1-1';
const currentPosition = '2-1';

const line1_1 = document.getElementById('line1-1');
const line1_2 = document.getElementById('line1-2');
const line1_3 = document.getElementById('line1-3');
const line1_4 = document.getElementById('line1-4');
const line1_5 = document.getElementById('line1-5');
const line2_1 = document.getElementById('line2-1');
const line2_2 = document.getElementById('line2-2');
const line2_3 = document.getElementById('line2-3');
const line2_4 = document.getElementById('line2-4');
const line2_5 = document.getElementById('line2-5');
const inputEl = document.getElementById('search-input');

document.getElementById('search-btn').addEventListener('click', () => {
  selectOldPosition(position);
  selectCurrentPosition(currentPosition);
});

const selectOldPosition = (oldPosition) => {
  switch (oldPosition) {
    case '1-1':
      line1_1.classList.add('red');
      break;
    case '1-2':
      line1_2.classList.add('red');
      break;
    case '1-3':
      line1_3.classList.add('red');
      break;
    case '1-4':
      line1_4.classList.add('red');
      break;
    case '1-5':
      line1_5.classList.add('red');
      break;
    case '2-1':
      line2_1.classList.add('red');
      break;
    case '2-2':
      line2_2.classList.add('red');
      break;
    case '2-3':
      line2_3.classList.add('red');
      break;
    case '2-4':
      line2_4.classList.add('red');
      break;
    case '2-5':
      line2_5.classList.add('red');
      break;
  }
};

const selectCurrentPosition = (currentPosition) => {
  switch (currentPosition) {
    case '2-1':
      line2_1.classList.add('blue');
      break;
    case '2-2':
      line2_2.classList.add('blue');
      break;
    case '2-3':
      line2_3.classList.add('blue');
      break;
    case '2-4':
      line2_4.classList.add('blue');
      break;
    case '2-5':
      line2_5.classList.add('blue');
      break;
    case '1-1':
      line1_1.classList.add('blue');
      break;
    case '1-2':
      line1_2.classList.add('blue');
      break;
    case '1-3':
      line1_3.classList.add('blue');
      break;
    case '1-4':
      line1_4.classList.add('blue');
      break;
    case '1-5':
      line1_5.classList.add('blue');
      break;
  }
};
