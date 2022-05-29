const http = require('http')
const fs = require('fs')
http.createServer((req, res) => {
  fs.readFile('index.html', (err, data) => {
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.write(data)
    res.end()
  })
}).listen(8000)

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