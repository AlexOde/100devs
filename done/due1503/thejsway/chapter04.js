// Variable starts at the value of 1
let carousel = 1

// While the value of variable is les than or equals to 10, then run
while (carousel <= 10) {
    //Print the value to the console
    console.log(carousel)
    //Increase the variable value by 1
    carousel++
}

// Do the same as above, but with a for loop

//create the for (set the variable to 1; while the variable is less than or equals to 10, increase the variable by 1 and print it to the console)
for (let i = 1; i <= 10; i++) {
    console.log(i)
}

// *******************

// Declare the variable to start at 1; while the variable is less than or equals to 10, increase the variable by 1 and do an if/else statement

document.querySelector("#toTen").addEventListener("click", toTen)

function toTen(){
    let askNumber = parseInt(prompt("Insert a number"))

    for (i = askNumber; i <= askNumber + 9; i++) {

        // if the value an even number
        if (i % 2 === 0) {
            // prin the value with the text that the number is even
            console.log(`${i} is even`)

        //if the value is an odd number
        } else if (i != 0) {
            // print the value with the text that the number is odd
            console.log(`${i} is odd`)
        }
    }
}
// *********************

// Let the smurf listen for a click
document.querySelector("#check").addEventListener("click", click)


// The smurfs alerts all the other smurfs to run this instruction
function click (){
    // Loop the value inserted into the input; as long as the value inserted is less than or equals to 10, count one value up
    for (let i = parseInt(document.querySelector("#numberInput").value); i <= 10; i++) {
        // if the value of the number is even, print the number with the text that it is even
        if (i % 2 === 0) {
            console.log(`${i} is even`)
        //if the value of the number is odd, print the number with the text that it is odd
        } else if (i != 0) {
            console.log(`${i} is odd`)
        }
    }
}

//***********************

// The smurfs are on the hunt in the wilderness, silent and quiet, waiting... listening to what is happening... In the distance, they can hear a guard smurf, yelling 'Click Me, Click Me!'
document.querySelector("#clickMe").addEventListener("click", clickMe)

// The smurfs jump on the follow the instructions sent to them
function clickMe () {    

    // "Let's ask for a number!" a smurf suggests
    let i = prompt("Please enter a number")

    // "But I don't like numbers between 50 and 100...' another smurf cries
    while (i < 50 || i > 100) {
        //"Then we can always ask for another number, until we find one everyone likes!" an older smurf suggests
        i = prompt("Could you please enter another number?")
    }
}


// Write a program that asks the user for a number, then shows the multiplication table for this number.


// listen for the multiply number button being clicked
document.querySelector("#multNbr").addEventListener("click", multNbr)

// Run the instructions for the phone number button
function multNbr() {
    //Ask the user for a number
    let multi = prompt("Enter a number")

    // run a loop where the number inserted into the prompt shows the multiplication table up to 10
    // for (i = 1; i <= 10; ++i) {
    //     console.log(`${multi} multiplied by ${i} equals ${multi * i}`)
    // }
    // IMPROVEMENT: only accept values between 2 and 9 (0 and 1)

    // check if the number is between 1 and 10 (I DID THIS ON PURPOSE!! SEMATICALLY, IT IS CORRECT!!!!!) - if not, ask for a new number
    while (multi < 2 || multi > 9){
        // the variable changes to the new number input
        multi = prompt("Please only enter a number between 1 and 10")
    }

    // if the number was between 1 and 10, use the number to show the multiplication table
    for (i = 1; i <= 10; ++i) {
        console.log(`${multi} multiplied by ${i} equals ${multi * i}`)
    }
}


/////////////////////////

//Write a program that plays "neither yes, nor no" with the user. Specifically, the programs asks the user to enter text until either "yes" or "no" is typed, which ends the game.

// Listen for the click of a specific button 
document.querySelector("#yesNo").addEventListener("click", playGame)


// if the playGame button was clicked, then run this set of instructions
function playGame() {
    //Ask the user to enter a phrase
    yesNo = prompt("Enter a phrase").toLowerCase()

    // If the phrase is not yes or not, then it will ask for a new input
    while (yesNo != "yes" && yesNo != "no" && yesNo != "42"){
        yesNo = prompt("Ah ah aahh, you didn't say the magic phrase!").toLowerCase()
    }
    // give an alert stating that the user won
    alert("You won!")
    
}

//////////////////////

/* Write a program that shows all numbers between 1 and 100 with the following exceptions:

It shows "Fizz" instead if the number is divisible by 3.

It shows "Buzz" instead if the number is divisible by 5 and not by 3.

When it's done, improve it so that the program shows "FizzBuzz" instead for numbers divisible both by 3 and by 5.
*/

// The smurfs are listening for the clicking noice, and once they hear it, they know which way to run to find it
document.querySelector("#fizzBuzz").addEventListener("click", fizzy)

// They heard the click, and it instructed them to go to fizzy
function fizzy() {
    //inside fizzy, they found instruction to repeat the same thing over and over again: they first had to create the number 1; then they had to check how many numbers they had, and if the number was equal to or less than 100; they would add another number
    for (let i = 1; i <= 100; ++i) {
        
        // if the modulo of 3 and 5 is 0, print fizzbuzz
        if (i % 3 === 0 && i % 5 === 0) {
            console.log(`${i} is FizzBuzz`)
        }

        // if the modulo of 3 is 0, print fizz
        else if (i % 3 === 0) {
            console.log(`${i} is Fizz`)
        }

        // if the modulo of 5 is 0, print buzz
        else if (i % 5 === 0) {
            console.log(`${i} is Buzz`)
        }

        // else, print text nothing
        else {
            console.log(`${i}`)
        }
    }
}