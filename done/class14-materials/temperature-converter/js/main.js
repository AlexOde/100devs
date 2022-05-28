//Write your pseduo code first! 

//Need to take an input from somewhere
document.querySelector('#click').addEventListener('click', run)

//Run the converter and display
function run() {
    //Get value
    let value = document.querySelector('#temp').value

    //calculate
    value = value * 9 / 5 + 32

    //show result
    document.querySelector('#show').innerText = value
    
}
//
//Write your pseduo code first! 

//Need to take an input from somewhere
document.querySelector('#click').addEventListener('click', run)

//Run the converter and display
function run() {
    const value = document.querySelector('#temp').value

    value = value * 9 / 5 + 32
    console.log(value)
    
}
//