//Write your pseduo code first! 

//write the input in celcius OR farenheit (two different fields)
//Call on the input required (depending on the button chosen) when the relevant button is selected
//run a function to convert the value to the other temperature type
//Output the result in the console

let fahr = 5

function convert() {
    let result = (fahr - 32) * 5 / 9
    console.log(result)
}

convert()

// function cToF(celsius) 
// {
//   var cTemp = celsius;
//   var cToFahr = cTemp * 9 / 5 + 32;
//   var message = cTemp+'\xB0C is ' + cToFahr + ' \xB0F.';
//     console.log(message);
// }

// function fToC(fahrenheit) 
// {
//   var fTemp = fahrenheit;
//   var fToCel = (fTemp - 32) * 5 / 9;
//   var message = fTemp+'\xB0F is ' + fToCel + '\xB0C.';
//     console.log(message);
// } 
// cToF(60);
// fToC(45);