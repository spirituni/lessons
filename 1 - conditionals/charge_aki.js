/*
  variables
*/

var battery = 50;       // perecentage of battery power that aki has (0 - 100)

var color = red;        // color of aki's power indicator

var pluggedIn = false;  // whether aki is connected to the charging port or not
var isCharging = false; // whether aki is currently charging or not

var indicator = '';     // a battery indicator message

function updateValues() {
  
/*
  if blocks (logic gates):

    1. since aki is battery powered, we need to know when to charge aki - using an if statement, try plugging aki in when she has no power

    2. let's make sure aki's is charging when she's plugged in - using if/else statements:

      i. make isCharging true when aki is pluggedIn

      ii. for her battery health, we also need to make sure that aki doesn't keep charging when her battery is already 100%

    3. we actually don't need to keep aki plugged in all the time - using an else if statement, take off the plug when aki is at full power

    4. now that we're taking the plug off as soon as aki hits 100%, we know that aki will always be charging whenever she's plugged in - optimize your code so there's no repeated logic

    remember, logic gates you can use are:
    - !  (NOT)
    - || (OR)
    - && (AND)
*/

// 1



// 2



// 3



// 4



/*
  if blocks (comparators):
  
    5. just to be safe, aki should be charged before her battery is completely empty - using an if statement, plug aki in when her battery is under 20, and make sure she's charging when she's plugged in!

    6. aki doesn't want her indicator to be scary red all the time - using if/else if/else statements, change the color to:
    - red (0-19)
    - yellow (20-49)
    - green (50-100)

    remember, comparators you can use are:
    - == (equal to)
    - >  (greater than)
    - >= (greater than or equal to)
    - <  (less than)
    - <= (less than or equal to)
*/

// 5



// 6



/*
  switch blocks:

     7. aki can send out indicator messages to notify you when her battery reaches certain percentages - using a switch statement, trigger and fill out her notifs at:
     - 0%   (empty)
     - 50%  (halfway)
     - 100% (full)
*/

// 7



/*
  (bonus) cleaning it all up:
    8. go back and remove or comment out all the code that no longer does anything!

*/

}