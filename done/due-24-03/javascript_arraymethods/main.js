// Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.

// That is: removes all dashes, each word after dash becomes uppercased.

/*=============================
DID NOT COMPLETE WITHOUT LOOKING AT SOLUTION
===============================*/
function camelize(str) {
    str = str.split('-')
    str = str.map(
        // fat arrow is for function, and if index is 0, meaning the first word, it will stay the same word (truthy), but all else (falsy) the first word will be uppercased, and we slice the uppercased word with the rest of the word starting at the second letter (so we do not repeat the first letter again)
        (word, index) => index === 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    str = str.join('')
    // console.log(str)
}

camelize("background-color")
camelize("list-style-image")
camelize("-webkit-transition") 

//===================================


//===================================
// Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.

// The function should only modify the array. It should not return anything.

// creat the array with random values
let arr = [5, 'only', 'show', 'these', 'values', 2]
// create a function that checks the array and
function filterRangeInPlace(arr, a, b) {
    // console.log(arr.slice(a, b))
    return arr.slice(a, b)
}

// call the function
filterRangeInPlace(arr, 1, 5)
//=======================================

// Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.

// The function should not modify the array. It should return the new array.



function filterRange(arr22, a, b) {
    // added brackets around the expression for better readability
    return arr22.filter(item => (a <= item && item <= b));
  }
  
  let arr22 = [5, 3, 8, 1];
  
  let filtered = filterRange(arr22, 1, 4);
  
//   alert( filtered ); // 3,1 (matching values)
  
//   alert( arr22 ); // 5,3,8,1 (not modified)


//========================================
let decreasingOrder = [5, 2, 1, -10, 8];

// ... your code to sort it in decreasing order

decreasingOrder.sort((a, b) => b - a)

// console.log(decreasingOrder); // 8, 5, 2, 1, -10

//========================================
// We have an array of strings arr. We’d like to have a sorted copy of it, but keep arr unmodified.

// Create a function copySorted(arrSort) that returns such a copy.

let arrSort = ["HTML", "JavaScript", "CSS"];

function copySorted(arrSort) {
    return arrSort.slice().sort();
}

let sorted = copySorted(arrSort);

console.log( sorted ); // CSS, HTML, JavaScript
console.log( arrSort ); // HTML, JavaScript, CSS (no changes)

//==========================================

function calculator() {

    this.methods = {
        "-": (a, b) => a - b,
        "+": (a, b) => a + b
    };

    this.calculate = function(str) {

        let split = str.split(' '),
        a = +split[0],
        op = split[1],
        b = +split[2];

        if (!this.methods[op] || isNaN(a) || isNaN(b)) {
            return NaN;
    }

        return this.methods[op](a, b);
    }; 

    this.addMethod = function(name, func) {
        this.methods[name] = func;
    };
}
let powerCalc = new calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
alert( result ); // 8

//==============================================

// MAP TO NAMES

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];

let names = users.map(item => item.name);

alert( names ); // John, Pete, Mary

//===============================================

// MAP TO OBJECTS

let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [ john, pete, mary ];

let usersMapped = users.map(user => ({
    fullName: `${user.name} ${user.surname}`,
    id: user.id
  }));

/*
usersMapped = [
  { fullName: "John Smith", id: 1 },
  { fullName: "Pete Hunt", id: 2 },
  { fullName: "Mary Key", id: 3 }
]
*/

alert( usersMapped[0].id ) // 1
alert( usersMapped[0].fullName ) // John Smith

//===========================================

// SORT USERS BY AGE

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let arrName = [ pete, john, mary ];

function sortByAge(arrName) {
    arrName.sort((a, b) => a.age - b.age)
}

sortByAge(arrName);

// now: [john, mary, pete]
alert(arrName[0].name); // John
alert(arrName[1].name); // Mary
alert(arrName[2].name); // Pete

//============================================

// SHUFFLE AN ARRAY

let arrRandom = [1, 2, 3];

function shuffle(arrRandom) {
    // I NEARLY GOT IT, but missed the - 0.5 - then I read the solution, and I see why it's techincally not a good solution.
    arrRandom.sort(() => Math.random() - 0.5);
}

shuffle(arrRandom);
// arr = [3, 2, 1]
console.log(arrRandom)

shuffle(arrRandom);
// arr = [2, 1, 3]
console.log(arrRandom)

shuffle(arrRandom);
// arr = [3, 1, 2]
console.log(arrRandom)



//=============================================

// GET AVERAGE AGE

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arrAge = [ john, pete, mary ];

function getAverageAge(arrAge) {
    // ACTUAL SOLUTION
    return arrAge.reduce((a, b) => a + b.age, 0) / arrAge.length

    // My original test, which failed...
    // return arrAge.reduce((a, b) => a.age + b.age) / arrAge.length
}

alert( getAverageAge(arrAge) ); // (25 + 30 + 29) / 3 = 28

// =============================================

// FILTER UNIQUE ARRAY MEMBERS

function unique(arrMembers) {
    /* your code */
    let individualMembers = []

    for (let name of arrMembers) {
        if (!individualMembers.includes(name)) {
            individualMembers.push(name)
        }
    }
    return individualMembers
  }
  
  let strings = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
  ];
  
  alert( unique(strings) ); // Hare, Krishna, :-O

  //================================================

  