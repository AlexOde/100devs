// Listen to the click of a button

document.querySelector('#yell').addEventListener('click', click)

// Run this function when the button is clicked

function click() {
  // Pick up all the input fields
  const fName = document.querySelector('#firstName').value
  const fmName = document.querySelector('#firstMiddle').value
  const lmName = document.querySelector('#lastMiddle').value
  const lName = document.querySelector('#lastName').value

  // All names are to be printed on the screen
  document.querySelector('#placeToYell').innerText = `${fName} ${fmName} ${lmName} ${lName}`
}