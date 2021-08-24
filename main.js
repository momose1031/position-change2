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
const reloadBtn = document.getElementById('reload-btn');

const modalP1 = document.createElement('p');
const modalP2 = document.createElement('p');
const modalP3 = document.createElement('p');
const modalP4 = document.createElement('p');
const modalP5 = document.createElement('p');
const modalP6 = document.createElement('p');
const modalP7 = document.createElement('p');
const modalP8 = document.createElement('p');
const modalP9 = document.createElement('p');

DHSelect.addEventListener('change', (e) => {
  if (e.target.value === 'select1') {
    DH.textContent = 'DHなし';
    selectBtn.addEventListener('click', () => {
      modal2 ();
      DHSelect.classList.add('hidden');
      selectBtn.classList.add('hidden');
      player.classList.remove('hidden');
      btn.classList.remove('hidden');
      btn.addEventListener('click', () => {
        if (bytes(player.value) > 8) {
          alert('全角4文字以内で入力してください')
        }
        if (bytes(player.value) <= 8 && player.value) {
          if (e.target.value !== 'select1') {
            return;
          }
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
        endBtn.addEventListener('click', () => {
          battingNum = [
            '(投)' + pitcher.textContent,
            '(捕)' + chatcher.textContent,
            '(一)' + first.textContent,
            '(二)' + second.textContent,
            '(三)' + third.textContent,
            '(遊)' + short.textContent,
            '(左)' + left.textContent,
            '(中)' + center.textContent,
            '(右)' + right.textContent
          ];
          modal.classList.remove('hidden');
          mask.classList.remove('hidden');
          modalP.textContent = '今日の打順はこれだ！！';
          modalP1.textContent = '１：' + battingNum.splice(Math.floor(Math.random() * battingNum.length), 1)[0];
          close.before(modalP1);
          modalP2.textContent = '２：' + battingNum.splice(Math.floor(Math.random() * battingNum.length), 1)[0];
          close.before(modalP2);
          modalP3.textContent = '３：' + battingNum.splice(Math.floor(Math.random() * battingNum.length), 1)[0];
          close.before(modalP3);
          modalP4.textContent = '４：' + battingNum.splice(Math.floor(Math.random() * battingNum.length), 1)[0];
          close.before(modalP4);
          modalP5.textContent = '５：' + battingNum.splice(Math.floor(Math.random() * battingNum.length), 1)[0];
          close.before(modalP5);
          modalP6.textContent = '６：' + battingNum.splice(Math.floor(Math.random() * battingNum.length), 1)[0];
          close.before(modalP6);
          modalP7.textContent = '７：' + battingNum.splice(Math.floor(Math.random() * battingNum.length), 1)[0];
          close.before(modalP7);
          modalP8.textContent = '８：' + battingNum.splice(Math.floor(Math.random() * battingNum.length), 1)[0];
          close.before(modalP8);
          modalP9.textContent = '９：' + battingNum.splice(Math.floor(Math.random() * battingNum.length), 1)[0];
          close.before(modalP9);
          reloadBtn.classList.remove('hidden');
        });
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
    selectBtn.addEventListener('click', () => {
      modal2 ();
      DHSelect.classList.add('hidden');
      selectBtn.classList.add('hidden');
      player.classList.remove('hidden');
      btn.classList.remove('hidden');
      btn.addEventListener('click', () => {
        if (bytes(player.value) > 8) {
          alert('全角4文字以内で入力してください')
        }
        if (bytes(player.value) <= 8 && player.value) {
          if (e.target.value !== 'select2') {
            return;
          }
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
            if(players.length < 11) {
              player.classList.remove('hidden');
              btn.classList.remove('hidden');
              changeBtn.classList.add('hidden');
            }
          });
          if (players.length > 9) {
            player.classList.add('hidden');
            btn.classList.add('hidden');
            changeBtn.classList.remove('hidden');
          }
        }
      });
      changeBtn.addEventListener('click', () => {
        if (e.target.value !== 'select2') {
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
        const player10 = players.splice(Math.floor(Math.random() * players.length), 1)[0];
        DH.textContent = 'DH：' + player10;
        changeBtn.classList.add('hidden');
        retryBtn.classList.remove('hidden');
        endBtn.classList.remove('hidden');
        endBtn.addEventListener('click', () => {
          battingNum = [
            '(指)' + DH.textContent,
            '(捕)' + chatcher.textContent,
            '(一)' + first.textContent,
            '(二)' + second.textContent,
            '(三)' + third.textContent,
            '(遊)' + short.textContent,
            '(左)' + left.textContent,
            '(中)' + center.textContent,
            '(右)' + right.textContent
          ];
          modal.classList.remove('hidden');
          mask.classList.remove('hidden');
          modalP.textContent = '今日の打順はこれだ！！';
          modalP1.textContent = '１：' + battingNum.splice(Math.floor(Math.random() * battingNum.length), 1)[0];
          close.before(modalP1);
          modalP2.textContent = '２：' + battingNum.splice(Math.floor(Math.random() * battingNum.length), 1)[0];
          close.before(modalP2);
          modalP3.textContent = '３：' + battingNum.splice(Math.floor(Math.random() * battingNum.length), 1)[0];
          close.before(modalP3);
          modalP4.textContent = '４：' + battingNum.splice(Math.floor(Math.random() * battingNum.length), 1)[0];
          close.before(modalP4);
          modalP5.textContent = '５：' + battingNum.splice(Math.floor(Math.random() * battingNum.length), 1)[0];
          close.before(modalP5);
          modalP6.textContent = '６：' + battingNum.splice(Math.floor(Math.random() * battingNum.length), 1)[0];
          close.before(modalP6);
          modalP7.textContent = '７：' + battingNum.splice(Math.floor(Math.random() * battingNum.length), 1)[0];
          close.before(modalP7);
          modalP8.textContent = '８：' + battingNum.splice(Math.floor(Math.random() * battingNum.length), 1)[0];
          close.before(modalP8);
          modalP9.textContent = '９：' + battingNum.splice(Math.floor(Math.random() * battingNum.length), 1)[0];
          close.before(modalP9);
          reloadBtn.classList.remove('hidden');
        });
        retryBtn.addEventListener('click', () => {
          players.push(player1, player2, player3, player4, player5, player6, player7, player8, player9, player10);
          pitcher.textContent = players.splice(Math.floor(Math.random() * players.length), 1)[0];
          chatcher.textContent = players.splice(Math.floor(Math.random() * players.length), 1)[0];
          first.textContent = players.splice(Math.floor(Math.random() * players.length), 1)[0];
          second.textContent = players.splice(Math.floor(Math.random() * players.length), 1)[0];
          third.textContent = players.splice(Math.floor(Math.random() * players.length), 1)[0];
          short.textContent = players.splice(Math.floor(Math.random() * players.length), 1)[0];
          left.textContent = players.splice(Math.floor(Math.random() * players.length), 1)[0];
          center.textContent = players.splice(Math.floor(Math.random() * players.length), 1)[0];
          right.textContent = players.splice(Math.floor(Math.random() * players.length), 1)[0];
          DH.textContent = 'DH：' + players.splice(Math.floor(Math.random() * players.length), 1)[0];
        });
      });
    });
  }
  else {
    DH.textContent = 'DHを選択';
  }
});

const topPage = document.getElementById('top-page');
const startBtn = document.getElementById('start-btn');
const modal = document.getElementById('modal');
const modalP = document.getElementById('modal-p');
const mask = document.getElementById('mask');
const close = document.getElementById('close');

startBtn.addEventListener('click', () => {
  topPage.classList.add('hidden');
  modal.classList.remove('hidden');
  mask.classList.remove('hidden');
});

close.addEventListener('click', () => {
  modal.classList.add('hidden');
  mask.classList.add('hidden');
});

mask.addEventListener('click', () => {
  close.click();
});

function modal2 () {
  modal.classList.remove('hidden');
  mask.classList.remove('hidden');
  modalP.textContent = '出場するプレイヤーを登録しよう！！';
}