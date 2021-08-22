const pitcher = document.getElementById('pitcher');
const chatcher = document.getElementById('chatcher');
const first = document.getElementById('first');
const second = document.getElementById('second');
const third = document.getElementById('third');
const short = document.getElementById('short');
const left = document.getElementById('left');
const center = document.getElementById('center');
const right = document.getElementById('right');
const DH = document.getElementById('DH');

function bytes(str) { //全角1文字、半角2文字としてカウント
	str = str.replace(/[｡-ﾟ]/g, 'K');
	let hex = '';
	for (let i = 0; i < str.length; i++) {
		hex += (('0000' + str.charCodeAt(i).toString(16)).slice(-4)).replace(/^00/, '');
	}
	return hex.length/2;
}

let players = [];
let player = document.getElementById('player');
const playerLists = document.getElementById('player-lists');

const DHSelect = document.getElementById('DH-select');
const selectBtn = document.getElementById('select-btn');
const btn = document.getElementById('btn');

DHSelect.addEventListener('change', (e) => {
  if (e.target.value === 'select1') {
    DH.textContent = 'DHなし';
    selectBtn.addEventListener('click', () => {
      DHSelect.classList.add('hidden');
      selectBtn.classList.add('hidden');
      player.classList.remove('hidden');
      btn.classList.remove('hidden');
      btn.addEventListener('click', () => {
        if (bytes(player.value) > 8) {
          alert('全角4文字以内で入力してください')
        }
        if (bytes(player.value) <= 8 && player.value) {
          players.push(player.value);
          const li = document.createElement('li');
          li.textContent = player.value;
          const deleteBtn = document.createElement('div');
          deleteBtn.classList.add('delete-btn');
          deleteBtn.textContent = '(削除する)';
          playerLists.appendChild(li);
          playerLists.appendChild(deleteBtn);
          player.value = ''; //inputの中身を空にする
          deleteBtn.addEventListener('click', () => {
            li.remove();
            deleteBtn.remove();
            let index = players.indexOf(li.textContent);
            if (index > -1) {
              players.splice(index, 1);
            }
            if(players.length < 8) {
              player.classList.remove('hidden');
              btn.classList.remove('hidden');
              // changeBtn.classList.add('hidden');
            }
          });
        }
      });
    });
  }
  else if (e.target.value === 'select2') {
    DH.textContent = 'DHあり';
  }
  else {
    DH.textContent = 'DHを選択';
  }
});

