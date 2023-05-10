const oldPosition = '1-2';
const currentPosition = '2-2';

const inputEl = document.getElementById('search-input');
const tds = document.querySelectorAll('td');
const tdItems = {};

for (let td of tds) {
  tdItems[td.id] = td;
}

document.getElementById('search-btn').addEventListener('click', () => {
  $.ajax({
    url: 'http://123.57.109.30:3006/api/getbooks',
    type: 'get',
    dataType: 'json',
    async: false,
    success: (res) => console.log(res),
  });

  console.log(1);

  for (let id in tdItems) {
    tdItems[id].className = '';
  }

  tdItems['line' + oldPosition].className = 'blue';
  tdItems['line' + currentPosition].className = 'red';
});
