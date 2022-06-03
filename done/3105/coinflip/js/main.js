document.querySelector('button').addEventListener('click', flipCoin)

async function flipCoin() {
    console.log('clicked')
    const res = await fetch('/api')
    const result = await res.json()

    // document.querySelector('h2').innerText = result
}