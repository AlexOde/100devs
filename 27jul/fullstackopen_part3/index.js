const http = require('http')

const app = http.createServer((request, response) => {
    response.writeHead(200, {'Content-Type': 'text/plain'})
    response.end('Hello World')
})

let notes = [
    {
        id: 1,
        content: "HTML is easy",
        date: "Mon Jul 25 2022 19:59:29 GMT+0200",
        important: true
    },
    {
        id: 2,
        content: "Browsers can only execute Javascript",
        date: "Mon Jul 25 2022 20:00:54 GMT+0200",
        important: false
    },
    {
        id: 3,
        content: "GET and POST are the most important methods of HTTP protocol",
        date: "Mon Jul 25 2022 20:01:38 GMT+020",
        important: true
    }
]

const PORT = 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)