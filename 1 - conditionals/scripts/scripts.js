// hex code colors
const red = '#FF6355';
const yellow = '#FAE442';
const green = '#8BD448';

window.onload = function() {

  let percentInput = document.getElementById('percent-input');
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
  let filled = '';

  for (let i = 0; i < battery; i += 10) {
    filled += '▮';
  }

  const pips = filled.padEnd(10, '▯');

  // replace displayed bar
  let bars = document.getElementById('bars');
  bars.textContent = pips;

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