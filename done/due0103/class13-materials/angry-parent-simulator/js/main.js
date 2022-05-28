document.querySelector('#yell').addEventListener('click', run)

function run() {
  const fName = document.querySelector('#firstName').value
  const fmName = document.querySelector('#firstMiddle').value
  const lmName = document.querySelector('#lastMiddle').value
  const lName = document.querySelector('#lastName').value

  document.querySelector('#placeToYell').innerText = `${fName} ${fmName} ${lmName} ${lName}`
}