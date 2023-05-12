let oldPosition;
let currentPosition;
let value = '';

const inputEl = document.getElementById('search-input');
const spans = document.querySelectorAll('span');
const tdItems = {};
const containerEl = document.getElementsByClassName('container');
const goodsInfoEl = document.getElementsByClassName('goods-info-container');

for (let span of spans) {
  tdItems[span.id] = span;
}

document.getElementById('search-btn').addEventListener('click', () => {
  goodsInfoEl[0].classList.add('isHidden');
  containerEl[0].classList.remove('isHidden');

  for (let id in tdItems) {
    tdItems[id].className = '';
  }

  // value = inputEl.value;

  $.ajax({
    url: 'http://192.168.100.95:8082/zhier/query',
    data: {
      code: 'A1001',
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

document.getElementById('back-btn').addEventListener('click', () => {
  containerEl[0].classList.add('isHidden');
  goodsInfoEl[0].classList.remove('isHidden');
});
