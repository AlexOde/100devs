const e = require('express')
const { request } = require('express')
const express = require('express')
const app = express()

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

app.get('/', (request, response) => {
    response.send('<h1>Hello World...</h1>')
})

app.get('/api/notes/:id', (request, response) => {
    const id = Number(request.params.id)
    const note = notes.find(note => note.id === id)
    if (note) {
        response.json(note)
    } else {
        response.status(404).end()
    }
})

const PORT = 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)