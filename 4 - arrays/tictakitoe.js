/* 
  tic tac toe board
*/

// 1d array
var board = ['-', '-', '-', '-', '-', '-', '-', '-', '-'];

// 2d array
var board2d = [
  ['-', '-', '-'],
  ['-', '-', '-'],
  ['-', '-', '-']
];

/*
  other variables
*/

var winner = '';      // winner of the game ('x', 'o', or '')


function check(player, i) {

  // player: the letter that was just played ('x' or 'o')
  // i:      the index where the player just placed their letter

  /*

    setup:

      1. before we start, let's print out the array using a loop

      2. now that we have the value of each array slot printing out, let's format it in a way that's easy to read

  */

  var out = '';
  for (var x = 0; x < 9; ++x) {
    out += board[x];

    if ((x+1)%3 == 0) {
      out += '\n';
    }
  }
  console.log(out);

  /*

    win conditions:

      3. check whether the player wins horizontally (within a row)

      4. check whether the player wins vertically (within a column)

      5. check whether the player wins diagonally

  */

}

function check2d(player, row, col) {

  // player: the letter that was just played ('x' or 'o')
  // row:    the number of the row that the player just placed their letter in 
  // col:    the number of the column that the player just placed their letter in 

  /*
  
    setup:

      1. same as before, let's print out the array, only this time, we can to use a loop within a loop (nested loops)


           0     1     2     (j)

      0    0,0   0,1   0,2


      1    1,0   1,1   1,2


      2    2,0   2,1   2,2

     (i)


  */

  var out = '';
  for (var i = 0; i < 3; ++i) {
    for (var j = 0; j < 3; ++j) {
      out += board2d[i][j];
    }
    out += '\n';
  }
  console.log(out);

  /*

    win conditions:

      2. check whether the player wins horizontally (within a row)

      3. check whether the player wins vertically (within a column)

      4. check whether the player wins diagonally

  */

  /*
    with just conditions
  */


  /*

    with loops

  */

  // 2
  var win = true;
  for (var j = 0; j < 3; ++j) {
    if (board2d[row][j] != player) {
      win = false;
    }
  }

  if (win) {
    winner = player;
  } else {
    // 3
    win = true;
    for (var i = 0; i < 3; ++i) {
      if (board2d[i][col] != player) {
        win = false;
      }
    }

    if (win) {
      winner = player;
    } else {
      // 4
      win = true;
      if (board2d[1][1] != player) {
        win = false;
      } else {
        if (!(board2d[0][0] == player && board2d[2][2] == player) && !(board2d[0][2] == player && board2d[2][0] == player)) {
          win = false;
        }
        if (win) {
          winner = player;
        }
      }

    }
  }
  // console.log(row, col)
  // console.log(win);
}

/*

  bonus: what are some ways you can optimize this? think about checks that you're making that might not need to be made in certain situations (hint - can you win with less than 3 letters?)

*/