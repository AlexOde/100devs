//Handle Capital Letters, Place result in DOM, add a check for humpday (Wed)

// Listen for the click of a button
document.querySelector('#check').addEventListener('click', run)

// Create a function that runs when the button is clicked

function run() {
  // Capture the input, and make it lowercase so it is not case sensitive
  const day = document.querySelector('#day').value.toLowerCase()

  // If tuesday or thursday, show you have class
  if(day === "tuesday" || day === "thursday"){
    document.querySelector('#placeToSee').innerText = 'You have class today!!'
  }
  //If saturday or sunday, show that it's the weekend
  else if( day === "saturday" || day === "sunday"){
    document.querySelector('#placeToSee').innerText = 'Its The Weekend'
  }
  //If wednesday, show that it's a hump day
  else if(day === "wednesday"){
    document.querySelector('#placeToSee').innerText = 'It\'s a humpday. Get ready for tomorrow!!'
  } 
  
  // If neither days are selected, show that it's a boring day
  else {
    document.querySelector('#placeToSee').innerText = 'Boring!!'
  }

}
