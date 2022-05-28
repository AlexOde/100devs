// Create variables that links to the image
const andi = document.querySelector('#andi')
const claire = document.querySelector('#claire')
const sharleen = document.querySelector('#sharleen')

// Create eventlisteners that will react once a name is clicked
document.querySelector('#andiNext').addEventListener('click', andiNext)
document.querySelector('#claireNext').addEventListener('click', claireNext)
document.querySelector('#sharleenNext').addEventListener('click', sharleenNext)

// Function that will run if Andi is selected
function andiNext() {
	claire.classList.add('hidden')
	sharleen.classList.add('hidden')
	andi.classList.toggle('hidden')
}

// Function that will run if Claire is selected
function claireNext() {
	andi.classList.add('hidden')
	sharleen.classList.add('hidden')
	claire.classList.toggle('hidden')
}

// Function that will run if Sharleen is selected
function sharleenNext() {
	andi.classList.add('hidden')
	claire.classList.add('hidden')
	sharleen.classList.toggle('hidden')
}

// Listen if the image of Sharleen has been clicked
document.querySelector('#sharleen').addEventListener('click', clickSharleen)

// Alert that will run if you click on Sharleens image
function clickSharleen() {
	alert('You have selected the person who should\'ve won the Bacherlor!!')
}