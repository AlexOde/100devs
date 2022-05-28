const name = prompt('What is your name?')
alert(`Hello, ${name}`)

let a = 2;
a -= 1;
a++;
let b = 8;
b += 2;
const c = a + b * b; //102
const d = a * b + b; //30
const e = a * (b + b); //40
const f = a * b / a; //10
const g = b / a * a; //10
console.log(a, b, c, d, e, f, g);

const priceVat = Number(prompt('Please enter a number'))
alert(`The price including vat is ${priceVat * 1.206}`)

const cels = Number(prompt('Please insert the Celcius degrees to get the value in Fahrenheit'))
alert(`The temp of ${cels} in Celcius is ${cels * 9/5 + 32}`)

let number1 = 5;
let number2 = 3;

let new1 = number2
let new2 = number1

number1 = new1
number2 = new2

console.log(number1); // Should show 3
console.log(number2); // Should show 5