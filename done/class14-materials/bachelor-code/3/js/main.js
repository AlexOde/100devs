
// Link a variable to all elements with the class of contestant
const contestants = document.querySelectorAll('.contestant')

// I have no idea how this works, but I guess I'll get it eventually...
Array.from(contestants).forEach(element => element.addEventListener('click', checkForRose))

// Run the function looking for the clicks on the names
function checkForRose(click) {
	// IF statement to run IF the element selected contains the class of rose and toggle display hidden to show the image
	if(click.target.classList.contains('rose')){
		document.querySelector('#nikki').classList.toggle('hidden')
	} else {
		// Alert will display if the selected one does not display the element which contains the class of rose
		alert('This was not the winner...')
	}
}