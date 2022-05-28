function min(n1, n2) {
    return Math.min(n1, n2)
}

console.log(min(0, 10));

console.log(min(0, -10));

/////////////////////////



console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??

/////////////////////

function isEven (number) {
    if (number === 0) {
        return true
    }
    else if (number === 1) {
        return false
    }
    else if (number < 0) {
        return isEven(-number)
    }
    else return isEven(number - 2)
}

console.log(isEven(5))

///////////////////////



function countBs (string) {
    return showBs(string, 'B')
}

console.log(countBs("BBC"));