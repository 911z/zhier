let oldPosition = '1-4';
let currentPosition = '2-1';

const inputEl = document.getElementById('search-input');
const tds = document.querySelectorAll('td');
const tdItems = {};

const key = [
  {
    name: 't1',
  },
  {
    name: 't2',
  },
  {
    name: 't3',
  },
  {
    name: 't4',
  },
  {
    name: 't5',
  },
  {
    name: 't6',
  },
  {
    name: 't7',
  },
  {
    name: 't8',
  },
  {
    name: 't9',
  },
  {
    name: 't10',
  },
];

for (let i = 0; i < key.length; i++) {
  if (i === 0) {
    tds[0].className = key[i].name;
  } else if (i === 1) {
    tds[1].className = key[i - 1].name;
  } else if (i === 2) {
    tds[2].className = key[i - 1].name;
  } else if (i === 3) {
    tds[3].className = key[i - 1].name;
  } else if (i === 4) {
    tds[4].className = key[i - 1].name;
  } else if (i === 5) {
    tds[5].className = key[i - 1].name;
  } else if (i === 6) {
    tds[6].className = key[i - 1].name;
  } else if (i === 7) {
    tds[7].className = key[i - 1].name;
  } else if (i === 8) {
    tds[8].className = key[i - 1].name;
  } else if (i === 9) {
    tds[9].className = key[i - 1].name;
  }
}

for (let td of tds) {
  tdItems[td.id] = td;
}

document.getElementById('search-btn').addEventListener('click', () => {
  // debugger;
  for (let i = 0; i < tds.length; i++) {
    if (tds[i].classList.value === inputEl.value) {
      console.log(tds[i].classList.value);
      console.log(tds[i]);
    }
  }

  $.ajax({
    url: 'http://123.57.109.30:3006/api/getbooks',
    type: 'get',
    dataType: 'json',
    async: false,
    success: (res) => console.log(res),
  });
  oldPosition = '2-5';
  currentPosition = '1-1';

  tdItems['line' + oldPosition].classList.add('blue');
  tdItems['line' + currentPosition].classList.add('red');
});
