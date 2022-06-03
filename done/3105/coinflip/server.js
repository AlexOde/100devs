const http = require('http')
const fs = require('fs')
const url = require('url');

const server = http.createServer((req, res) => {
    const page = url.parse(req.url).pathname;
    

    if (page == '/') {
        fs.readFile('index.html', function(err, data) {
          res.writeHead(200, {'Content-Type': 'text/html'});
          res.write(data);
          console.log('listening on 8000')
          res.end();
        });
    }
    // else if (page === '/api') {
    //     let headsOrTails = Math.ceil(Math.random() * 2) === 1 ? 'heads' : 'tails'
    //       const resultHeadsOrTails = headsOrTails
          
    //       res.end(JSON.stringify(resultHeadsOrTails))
    // }
})
 
server.listen(8000)