// hex code colors
const red = '#FF6355';
const yellow = '#FAE442';
const green = '#8BD448';

var color = red;        // color of aki's power indicator (red, yellow, or green)

var pluggedIn = false;  // whether aki is connected to the charging port or not
var isCharging = false; // whether aki is currently charging or not

window.onload = function() {

  let percentInput = document.getElementById('percent-input');
  percentInput.value = battery;
  updateBattery(percentInput);
 
};

function updateBattery(percentInput) {

  // restrict input between 0-100
  if (percentInput.value === '' || percentInput.value < 0) {
    percentInput.value = 0;
  } else if (percentInput.value > 100) {
    percentInput.value = 100;
  }

  // update and print out battery value as an int
  battery = parseInt(percentInput.value, 10);

  // change displayed percentage based on battery value
  let percent = document.getElementById('percent');
  percent.textContent = battery;

  // create bar based on battery value
  updateBar();

  // replace displayed bar
  let bars = document.getElementById('bars');
  bars.textContent = bar;

  updateValues();
  updateColors();
  updatePlug();
  updateCharging();
  updateAki();
  updateMessage();

  // console.log('battery is now at', battery, '% | plugged in?', pluggedIn, '| charging?', isCharging);
}

function updateColors() {

  let power = document.getElementById('power').style;
  if (power !== null) {
    power.color = color;
  }

  let message = document.getElementById('message').style;
  if (message !== null) {
    message.color = color;
  }

}

function updatePlug() {
  
  let plug = document.getElementById('plug').style;
  if (plug !== null) {
    pluggedIn ? plug.visibility = 'visible' : plug.visibility = 'hidden';
  }

}

function updateCharging() {
  
  let charging = document.getElementById('charging').style;
  if (charging !== null) {
    isCharging ? charging.visibility = 'visible' : charging.visibility = 'hidden';
  }

}

function updateAki() {
  let awake = document.getElementById('awake').style;
  let asleep = document.getElementById('asleep').style;
  if (battery == 0) {
    asleep.display = 'inline';
    awake.display = 'none';
  } else {
    asleep.display = 'none';
    awake.display = 'inline';
  }
}

function updateMessage() {

  let message = document.getElementById('message');
  if (message !== null) {
    message.textContent = indicator;
  }

}

function updateValues() {

  if (battery < 20) {
    pluggedIn = true;
  } else if (battery == 100) {
    pluggedIn = false;
  }

  isCharging = pluggedIn;

  if (battery < 20) {
    color = red;
  } else if (battery < 50) {
    color = yellow;
  } else {
    color = green;
  }

  switch(battery) {
    case 0:
      indicator = 'empty';
      break;
    case 50:
      indicator = 'halfway';
      break;
    case 100:
      indicator = 'full';
      break;
    default:
      indicator = '';
  }
}