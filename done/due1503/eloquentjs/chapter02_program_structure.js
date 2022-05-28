// Print a triangle
for (printPound = '#'; printPound !== '########'; printPound += '#') {
    console.log(printPound)
}

// FizzBuzz
for (i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(`FizzBuzz`)
    }
    else if (i % 3 === 0) {
        console.log(`Fizz`)
    }
    else if (i % 5 === 0) {
        console.log(`Buzz`)
    }
    else {
        console.log(i)
    }
}

// Chessboard

function chess(size) {
    for (let i = 0; i < size; i++)
        if (i % 2 === 0)
            console.log(` #`.repeat(size))
        else
            console.log(`# `.repeat(size))
}

chess(8)