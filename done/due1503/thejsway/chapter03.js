
// Write a program that accepts a day name from the user, then shows the name of the following day. Incorrect inputs must be taken into account.

const day = prompt('Enter a day').toLowerCase()
// Check for Monday
if (day === 'monday') {
    console.log('Tomorrow is Tuesday')
}

// Check for Tuesday
else if (day === 'tuesday') {
    console.log('Tomorrow is Wednesday')
}

// Check for Wednesday
else if (day === 'wednesday') {
    console.log('Tomorrow is Thursday')
}

// check fro Thursday
else if (day === 'thursday') {
    console.log('Tomorrow is Friday')
}

// check for Friday
else if (day === 'friday') {
    console.log('Tomorrow is Saturday')
}

// check for Saturday
else if (day === 'saturday') {
    console.log('Tomorrow is Sunday')
}

// Check for Sunday
else if (day === 'sunday') {
    console.log('Tomorrow is Sunday')
}

else {
    console.log('You did not insert a day')
}

//switch mode

const day2 = prompt('Enter a day').toLowerCase()
switch (day2) {
    case 'monday':
        console.log('Tomorrow is Tuesday')
        break
    case 'tuesday':
        console.log('Tomorrow is Wendesday')
        break
    case 'wednesday':
        console.log('Tomrrow is Thursday')
        break
}

///////////////////////////////////

//Write a program that accepts two numbers, then compares their values and displays an appropriate message in all cases.

let n1 = Number(prompt('Please insert a number'))
let n2 = Number(prompt('Now insert another number'))

if (n1 > n2) {
    console.log(`${n1} is higher than ${n2}`)
}
else if (n1 < n2) {
    console.log(`${n1} is lower than ${n2}`)
}

else {
    console.log(`${n2} and ${n2} are the same value`)
}

/* FINAL VALUES
Initial values	    nb1 final value 	nb2 final value	    nb3 final value
nb1=nb2=nb3=4		0	                4                   12
nb1=4,nb2=3,nb3=2	4                   3                   2 		
nb1=2,nb2=4,nb3=0	3                   4                   0  		

FIRST TRYYYYYYYY!!!!!!!!!!
*/

// Write a program that accepts a month number (between 1 and 12), then shows the number of days of that month. Leap years are excluded. Incorrect inputs must be taken into account.

let month = Number(prompt('Please enter a month number'))

if (month === 1 || month === 3 || month === 5 || month === 7 || month === 9 || month === 10 || month === 12) {
    console.log(`Month ${month} has 31 days in it`)
}
else if (month === 4 || month === 6 || month === 8 || month ===11) {
    console.log(`Month ${month} has 30 days in it`)
}

else if (month === 2 ) {
    console.log(`Month ${month} has 28 days in it`)
}

else {
    console.log('The value you have entered does not correspond to a month')
}



// Write a program that asks for a time under the form of three information (hours, minutes, seconds). The program calculates and shows the time one second after. Incorrect inputs must be taken into account.

let h = Number(prompt('Enter hour'))
let m = Number(prompt('Enter minute'))
let s = Number(prompt('Enter second'))

if (h <= 23 && m <= 59 && s <= 59) {
    if (s === 59) {
        s = '00'
        m = m + 1
        if (m === 60) {
            m = '00'
            h = h + 1
            if (h === 24) {
                h = '00'
                m = '00'
                s = '00'
            }
        }
    }
    else if (s <= 58) {
        s = s + 1
    }
}
else {
    alert('Too high values')
}

console.log(h + ':' + m + ':' + s)


