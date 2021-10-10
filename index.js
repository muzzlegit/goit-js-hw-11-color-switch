const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];
const body = document.querySelector('body');
const startBtn = document.querySelector('button[data-action="start"]');
const stopBtn = document.querySelector('button[data-action="stop"]');

startBtn.addEventListener('click', onSartBtnClick);
stopBtn.addEventListener('click', onStopBtnClick);

let setIntervalId = null;

function onSartBtnClick() {
  setIntervalId = setInterval(startSwitchColor, 1000);
  startBtn.setAttribute('disabled','true');
}
function onStopBtnClick() {
  clearInterval(setIntervalId);
  startBtn.removeAttribute('disabled');
}
function startSwitchColor() {
  body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
}
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};