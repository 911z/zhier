let oldPosition = '1';
let currentPosition = '2-1';
let value = '';

const inputEl = document.getElementById('search-input');
const spans = document.querySelectorAll('span');
const tdItems = {};

for (let span of spans) {
  tdItems[span.id] = span;
}

document.getElementById('search-btn').addEventListener('click', () => {
  // for (let i = 0; i < spans.length; i++) {
  //   if (spans[i].classList.value === inputEl.value) {
  //     console.log(spans[i]);
  //     break;
  //   }
  // }

  for (let id in tdItems) {
    tdItems[id].className = '';
  }

  value = inputEl.value;

  $.ajax({
    url: 'http://192.168.100.95:8082/zhier/query',
    data: {
      code: value,
    },
    type: 'get',
    dataType: 'json',
    async: false,
    success: (res) => {
      oldPosition = res.data.oldLocation;
      currentPosition = res.data.nowLocation;
    },
  });
  tdItems[oldPosition].classList.add('blue');
  tdItems[currentPosition].classList.add('red');
});
