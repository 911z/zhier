const oldPosition = '1-2';
const currentPosition = '2-2';

const inputEl = document.getElementById('search-input');
const tds = document.querySelectorAll('td');
const tdItems = {};

for (let td of tds) {
  tdItems[td.id] = td;
}

document.getElementById('search-btn').addEventListener('click', () => {
  for (let id in tdItems) {
    tdItems[id].className = '';
  }

  tdItems['line' + oldPosition].className = 'red';
  tdItems['line' + currentPosition].className = 'blue';
});
