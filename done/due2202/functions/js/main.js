
function checkAge(age) {
    return (age > 18) ? true : confirm("Did parent allow you?");
}
function checkAge(age) {
    return (age > 18) || confirm("Did parents allow you?");
}

function min(a, b) {
    if (a > 5) {
        return a
    } 
    else {
        return b
    }
}

function min(a, b) {
    if (a == b) {
        return b;
    }
    else {
        return a;
    }
}

function min(a, b) {
    return a < b ? a : b;
}

