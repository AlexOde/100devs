// MUSKETEERS //

const musketeers = ['Athos', 'Porhos', 'Aramis']
// show each musketeer with a for loop
for (let i = 0; i < musketeers.length; i++) {
    console.log(musketeers[i])
}

// Add 'D'artagnan' value to the array
musketeers.push('D\'artagnan')
// For each musketeer, show their names
musketeers.forEach(musketeer => {
    console.log(musketeer)
})
// Remove Aramis from the musketeers
musketeers.splice(2,1)
musketeers.forEach(musketeer => {
    console.log(musketeer)
})

/*==========================
SUM OF VALUES
==========================*/

/* Write a program that creates the following array, then calculates and shows the sum of its values (42 in that case).

*/
const values = [3, 11, 7, 2, 9, 10];

function calculateValuesAndShowMaxValue() {
    let sum = 0
    for (i = 0; i < values.length; i++) {
        sum += values[i]
    }
    console.log(sum)
}

calculateValuesAndShowMaxValue()

/*=========================
LIST OF WORDS
===========================*/

// Write a program that asks the user for a word until the user types "stop". The program then shows each of these words, except "stop".

// create an array
let words = []
// variable that holds the words that will be added
let word = ''
// while the words does not equal stop, ask again
while (word !== 'stop') {
    word = prompt('Please enter a word. Type \'stop\'(lowerCase) to stop this program')
    // if the word does not equal stop 
    if (word !== 'stop') {
        // add the word to the list
        words.push(word)
    }
}
// for each word, print the words
words.forEach(listWords => {
    console.log(listWords)
})