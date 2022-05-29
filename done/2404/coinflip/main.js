
async function randomCoinFlip() {
    try{
        //Create a random number, which will be 0 or 1
        const randomNumber = Math.floor(Math.random()*2)
        
        // If the number is 0, show heads
        if (randomNumber === 0) {
            console.log('Heads')
        } 
        // If the number is 1, show tails
        else {
            console.log('Tails')
        }
    }
    catch(error) {
        console.log('error')
    }
}

randomCoinFlip()