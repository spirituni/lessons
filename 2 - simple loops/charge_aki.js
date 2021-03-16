/*
  starting variables
*/
var battery = 50;       // perecentage of battery power that aki has (0 - 100)

var indicator = '';     // a battery indicator message
var bar = '';           // a battery indicator bar

function updateBar() {
  
/*
  while loops:

    1. looks like aki's battery bar is missing:

      i. using a while loop, make a bar full of 10 empty boxes

      ii. using two while loops, have the bar show filled boxes for every 10% of battery that aki has

      iii. now do it using one while loop and an if block (if/else/else if statements)!

      ▯ - empty box
      ▮ - filled box

*/

// 1 i
  bar = '';
  var length = 0;

  while (length < 10) {
      bar += '▯';                // can also be written: bar = bar + '▯';
      ++length;                   // can also be written: length = length + 1;
                                  // or even            : length += 1;
  }

// 1 ii
  bar = '';
  var length = 0;

  // filled boxes
  while (length < battery/10) {   // can also be written: while (length*10 < battery) {
      bar += '▮';
      ++length;
  }

  // empty boxes
  while (length < 10) {
      bar += '▯';
      ++length;
  }

// 1 iii
  bar = '';
  var length = 0;

  while (length < 10) {
      if (length < battery/10) {
        bar += '▮';
      } else {
        bar += '▯';
      }
      ++length;
  }

/*
  for loops:

    2. let's try to make all of those again, but with for loops instead of while loops!

*/

// 2

  // for (let i = 0; i < battery; i += 10) {
  //   bar += '▮';
  // }

  // const pips = bar.padEnd(10, '▯');
  // bar = pips;

/*
  (bonus) cleaning it all up:
    3. go back and remove or comment out all the code that no longer does anything!

*/

}