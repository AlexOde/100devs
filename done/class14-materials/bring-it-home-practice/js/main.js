// *Variables*
// Create a variable and console log the value

let logValue = 10

console.log(logValue)

// Create a variable, add 10 to it, and alert the value

let alertValue = 10

alertValue += 10

alert(alertValue)

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference

function subAlertValue(a, b, c, d) {
    sum = a - b - c - d
    difference = a - sum
    alert(`The difference between the values is ${difference}`)
}

subAlertValue(100,10,10,10)
// Create a function that divides one number by another and returns the remainder

function divValue(divOne, divTwo) {
    return divOne % divTwo
}

let divResult = divValue(50,2)
console.log(divResult)

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji

function addTwoNrs(nbrOne,nbrTwo) {
    sum = nbrOne + nbrTwo
    if (sum > 50) {
        alert('Jumanji')
    }
    else {
        alert ('fine')
    }
}

addTwoNrs(20,50)

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA

function divThree(zebOne, zebTwo, zebThree) {
    const sum = zebOne * zebTwo * zebThree
    if (sum % 3 === 0) {
        alert('ZEBRA')
        console.log()
    } else{
        alert('The product is not divisible by 3')
    }
}

divThree(3,3,3)