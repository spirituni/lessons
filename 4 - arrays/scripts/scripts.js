var i = 'x';

window.onload = function() {
  restart();
};

function restart() {
  i = 'x';

  document.querySelectorAll('button.grid').forEach(b => {
    b.disabled = false;
    b.innerHTML = '';
  });
}

function clicked(b) {
  b.disabled = true;
  b.innerHTML = i;
  grid[b.id] = i;

  if (i == 'x') {
    i = 'o';
  } else {
    i = 'x';
  }
}