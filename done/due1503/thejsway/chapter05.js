// Say hello to the user
function sayHello(firstName, lastName) {
    const message = `Hello, ${firstName} ${lastName}!`;
    return message;
}

sayHello(prompt('What is your first name?'), prompt('What is your last name?'))

  // TODO: ask user for first and last name
  // TODO: call sayHello() and show its result

/////////////////////////////////

// Square the given number x
function square1(x) {
    sum = x * x
    return sum
  }
  
  // Square the given number x
  const square2 = x => {
      sum = x * x
      return sum
  }
  
  console.log(square1(0)); // Must show 0
  console.log(square1(2)); // Must show 4
  console.log(square1(5)); // Must show 25
  
  console.log(square2(0)); // Must show 0
  console.log(square2(2)); // Must show 4
  console.log(square2(5)); // Must show 25

  // When it's done, update the program so that it shows the square of every number between 0 and 10.
  // NOT COMPLETED //

  //////////////////////////////////

  // TODO: write the min() function

function min(n1, n2) {
    if (n1 < n2) {
        return n1
    }

    else if (n1 > n2) {
        return n2
    }
    else if (n1 === n2) {
        return 'They\'re the same number'
    }
}

console.log(min(4.5, 5)); // Must show 4.5
console.log(min(19, 9));  // Must show 9
console.log(min(1, 1));   // Must show 1

/////////////////////////////////////////

/* Complete the following program so that it offers the four basic arithmetical operations: addition, subtraction, multiplication and division. You can use either a function declaration or a function expression.
*/

function calculate(n1, sign, n2) {
    if (sign === "+") {
        sum = n1 + n2
        return sum
    }
    else if (sign === "-") {
        sum = n1 - n2
        return sum
    }
    else if (sign === "*") {
        sum = n1 * n2
        return sum
    }
    else if (sign === "/") {
        sum = n1 / n2
        return sum
    }
}

console.log(calculate(4, "+", 6));  // Must show 10
console.log(calculate(4, "-", 6));  // Must show -2
console.log(calculate(2, "*", 0));  // Must show 0
console.log(calculate(12, "/", 0)); // Must show Infinity 

/////////////////////////////////////

/* Write a program containing two functions to calculate the circumference and area of a circle defined by its radius. Test it using user input.

Here are some tips for solving this exercise:

Circumference and area calculation formulas should be part of your secondary school memories... Or a Google click away :)
The value of number π (Pi) is obtained with Math.PI in JavaScript.
You might want to use the exponentiation operator ** to perform computations.*/

////NOT COMPLETED////


function circumference() {
    let radius = Number(prompt('Enter radius of a circle'))
    let circle = 2 * Math.PI * radius
    circumference = circle
}

function area() {
    let radius2 = Number(prompt('Enter radius of a circle'))
    radius2 = Math.PI * radius2 * radius2
    area = radius2
}

circumference()
area()
console.log(`The circumference of the circle is ${circumference}, and the area is ${area}`)

console.log(2 ** 3); // 8: 2 * 2 * 2
console.log(3 ** 2); // 9: 3 * 3