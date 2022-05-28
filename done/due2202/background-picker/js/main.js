document.getElementById('purple').onmouseenter = enterPurple
document.getElementById('green').onmouseleave = leaveGreen
document.getElementById('blue').onclick = clickBlue
document.getElementById('black').onmouseenter = enterBlack
document.getElementById('black').onmouseleave = leaveBlack

function enterPurple() {
  document.querySelector('body').style.backgroundColor = 'purple';
  document.querySelector('body').style.color = 'green';
}

function leaveGreen() {
  document.querySelector('li:nth-child(2)').style.backgroundColor = 'purple';
}

function clickBlue() {
  document.querySelector('h1').style.color = 'gold';
  document.querySelector('body').style.backgroundColor = 'darkgreen';
  document.querySelector('img').style.display = 'block';
}

function enterBlack() {
  document.querySelector('body').style.backgroundColor = 'black';
  document.querySelector('body').style.color = 'gold';
}

function leaveBlack() {
  document.querySelector('img').style.display = 'none';
  document.querySelector('body').style.backgroundColor = 'darkblue';
}
