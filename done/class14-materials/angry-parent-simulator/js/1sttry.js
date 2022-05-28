// listen for the click
document.querySelector("#yell").addEventListener("click", run)

// run the fuction
function run() {
    // find all names
    fName = document.querySelector("#firstName").value
    fmName = document.querySelector("#firstMiddle").value
    lmName = document.querySelector("#lastMiddle").value
    lName = document.querySelector("#lastName").value

    // print the text found in the names
    document.getElementById("placeToYell").innerText = `${fName} ${fmName} ${lmName} ${lName}`
    
}