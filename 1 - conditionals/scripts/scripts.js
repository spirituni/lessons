// hex code colors
const red = '#FF6355';
const yellow = '#FAE442';
const green = '#8BD448';

window.onload = function() {

  // initial values
  let power = document.getElementById('power').style;

  if (power !== null) {
    power.color = color;
  }

};

function updateBattery(percentInput) {

  // restrict input between 0-100
  if (percentInput.value === '' || percentInput.value < 0) {
    percentInput.value = 0;
  } else if (percentInput.value > 100) {
    percentInput.value = 100;
  }

  // update and print out battery value
  battery = percentInput.value;
  console.log('battery is now at', percentInput.value, '%');

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

}