// Listen for a click on the h1 text

document.querySelector('#finalRose').addEventListener('click', finalRose)

// Remove the display of two of the images

function finalRose() {
	document.querySelector('#claire').style.display = 'none'
	document.querySelector('#sharleen').style.display = 'none'
}

// Listen for a click on the image of Nikki to reset back to show all images
document.querySelector('#nikki').addEventListener('click', resetImages)

// Display the images once Nikki has been selected
function resetImages() {
	document.querySelector('#claire').style.display = 'inline'
	document.querySelector('#sharleen').style.display = 'inline'
}

// Listen for a click on either of the two contestands that did not win, and display an alert

document.querySelector('#claire').addEventListener('click', wrong)
document.querySelector('#sharleen').addEventListener('click', wrong)

// If clicking the wrong image, it will display an alert stating the chosen selection is incorrect
function wrong() {
	let ask = prompt("Insert the correct code")

	if (ask == 42) {
		alert("You have found the meaning of life. Don't forget to bring a towel!")
	}

	else if (ask === "") {
		alert("Gotcha, there is no code")
	}
}