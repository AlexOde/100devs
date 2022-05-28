


document.getElementById('clickMe').addEventListener('click', click);



function click() {
    let numOne = document.getElementById('numberOne').value;
    let numTwo = document.getElementById('numberTwo').value;
    document.getElementById('showResult').innerText = parseInt(numOne) * parseInt(numTwo);
}