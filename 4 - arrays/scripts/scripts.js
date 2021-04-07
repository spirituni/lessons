var p = 'x';
var message = 'wins';
var turns = 0;

window.onload = function() {
  restart();
  message = document.getElementById('message');
};

function restart() {
  // reset player
  p = 'x';
  turns = 0;
  message.innerHTML = 'next player: ' + p;
  winner = '';

  // reset buttons
  document.querySelectorAll('button.grid').forEach(b => {
    b.disabled = false;
    b.innerHTML = '';
  });

  // reset boards
  board = ['-', '-', '-', '-', '-', '-', '-', '-', '-'];
  board2d = [
    ['-', '-', '-'],
    ['-', '-', '-'],
    ['-', '-', '-']
  ];
}

function clicked(b) {
  ++turns;
  // console.log(turns);
  b.disabled = true;
  b.innerHTML = p;

  let i = Math.floor(b.id/3);
  let j = b.id - i*3;
  board[b.id] = p;
  board2d[i][j] = p;
  // console.log(b.id, i, j);

  check(p, b.id);
  check2d(p, i, j);

  // swap players
  if (p == 'x') {
    p = 'o';
  } else {
    p = 'x';
  }

  if (winner != '') {
    message.innerHTML = winner + " wins!";

    document.querySelectorAll('button.grid').forEach(b => {
      b.disabled = true;
    });
  } else if (turns == 9) {
    message.innerHTML = 'tie!';
  } else {
    message.innerHTML = 'next player: ' + p;
  }
}