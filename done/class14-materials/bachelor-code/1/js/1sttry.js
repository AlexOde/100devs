document.querySelector("#finalRose").addEventListener("click", showWinner)

function showWinner() {
    document.querySelector("#claire").style.display = "none"
    document.querySelector("#nikki").style.display = "none"

    document.querySelector(".show").style.display = "block"
}

document.querySelector("#sharleen").addEventListener("click", reset)

function reset() {
    document.querySelector("#claire").style.display = "inline-block"
    document.querySelector("#nikki").style.display = "inline-block"

    document.querySelector(".show").innerText = "Wow, look at you, managing to reset it"
}