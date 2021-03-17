/*
  starting variables
*/
var battery = 50;       // perecentage of battery power that aki has (0 - 100)

var indicator = '';     // a battery indicator message
var bar = '';           // a battery indicator bar made of boxes

const maxLength = 10;   // maximum number of boxes in the battery bar (read-only)

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
                                // or                 : length++;
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

      i. using a for loop, make a bar full of 10 empty boxes

      ii. using two for loops, have the bar show filled boxes for every 10% of battery that aki has

      iii. now do it using one for loop and an if block (if/else/else if statements)!
*/

// 2 i
  bar = '';

  for (var i = 0; i < 10; ++i) {
    bar += '▯';
  }

// 2 ii
  bar = '';

  // filled boxes
  var i = 0;                      // can also be written as: var i;
  for (; i < battery/10; ++i) {   //                         for (i = 0; i < battery/10; ++i) {
    bar += '▮';
  }

  // empty boxes
  for (; i < 10; ++i) {
    bar += '▯';
  }

  // 2 iii
  bar = '';

  var i = 0;
  for (var i = 0; i < 10; ++i) {
    if (i < battery/10) {
      bar += '▮';
    } else {
      bar += '▯';
    }
  }
  
/*
  (bonus) constants:
    3. instead of writing out the length of the bar each time, try using a constant!
    
    4. now do all the loops using decrements (--) instead of increments (++), but make sure to keep the battery bar behaviour the same

*/

  // 3
    // replace every 10 in your code above with maxLength

}