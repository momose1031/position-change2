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
const changeBtn = document.getElementById('change-btn');
const retryBtn = document.getElementById('retry-btn');
const endBtn = document.getElementById('end-btn');

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
            if(players.length < 10) {
              player.classList.remove('hidden');
              btn.classList.remove('hidden');
              changeBtn.classList.add('hidden');
            }
          });
          if (players.length > 8) {
            player.classList.add('hidden');
            btn.classList.add('hidden');
            changeBtn.classList.remove('hidden');
          }
        }
      });
      changeBtn.addEventListener('click', () => {
        if (e.target.value !== 'select1') {
          return;
        }
        const allDeleteBtn = document.getElementsByClassName('delete-btn');
        [].forEach.call(allDeleteBtn, (deleteBtn) => {
          deleteBtn.classList.add('hidden');
        });
        if (players.length === 0) {
          return;
        }
        const player1 = players.splice(Math.floor(Math.random() * players.length), 1)[0];
        pitcher.textContent = player1;
        const player2 = players.splice(Math.floor(Math.random() * players.length), 1)[0];
        chatcher.textContent = player2;
        const player3 = players.splice(Math.floor(Math.random() * players.length), 1)[0];
        first.textContent = player3;
        const player4 = players.splice(Math.floor(Math.random() * players.length), 1)[0];
        second.textContent = player4;
        const player5 = players.splice(Math.floor(Math.random() * players.length), 1)[0];
        third.textContent = player5;
        const player6 = players.splice(Math.floor(Math.random() * players.length), 1)[0];
        short.textContent = player6;
        const player7 = players.splice(Math.floor(Math.random() * players.length), 1)[0];
        left.textContent = player7;
        const player8 = players.splice(Math.floor(Math.random() * players.length), 1)[0];
        center.textContent = player8;
        const player9 = players.splice(Math.floor(Math.random() * players.length), 1)[0];
        right.textContent = player9;
        changeBtn.classList.add('hidden');
        retryBtn.classList.remove('hidden');
        endBtn.classList.remove('hidden');
        retryBtn.addEventListener('click', () => {
          players.push(player1, player2, player3, player4, player5, player6, player7, player8, player9);
          pitcher.textContent = players.splice(Math.floor(Math.random() * players.length), 1)[0];
          chatcher.textContent = players.splice(Math.floor(Math.random() * players.length), 1)[0];
          first.textContent = players.splice(Math.floor(Math.random() * players.length), 1)[0];
          second.textContent = players.splice(Math.floor(Math.random() * players.length), 1)[0];
          third.textContent = players.splice(Math.floor(Math.random() * players.length), 1)[0];
          short.textContent = players.splice(Math.floor(Math.random() * players.length), 1)[0];
          left.textContent = players.splice(Math.floor(Math.random() * players.length), 1)[0];
          center.textContent = players.splice(Math.floor(Math.random() * players.length), 1)[0];
          right.textContent = players.splice(Math.floor(Math.random() * players.length), 1)[0];
        });
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

