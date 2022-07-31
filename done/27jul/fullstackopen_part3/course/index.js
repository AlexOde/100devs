const express = require('express')
const app = express()

app.use(express.json())

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

app.get('/api/notes', (request, response) => {
    response.json(notes)
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

app.delete('/api/notes/:id', (request, response) => {
    const id = Number(request.params.id)
    notes = notes.filter(note => note.id !== id)

    response.status(204).end()
    
})

const generateId = () => {
    const maxId = notes.length > 0
    ? Math.max(...notes.map(n => n.id))
    :0

    return maxId + 1
}

app.post('/api/notes', (request, response) => {
    const body = request.body
    
    if (!body.content) {
        return response.status(400).json({
            error: 'content missing'
        })
    }

    const note = {
        content: body.content,
        important: body.important || false,
        date: new Date(),
        id: generateId()
    }

    notes = notes.concat(note)

    response.json(note)
})

const PORT = 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)

// app.get('/api/notes/:id', (request, response) => {
//     const id = request.params.id
//     const note = notes.find(note => {
//       console.log(note.id, typeof note.id, id, typeof id, note.id === id)
//       return note.id === id
//     })
//     console.log(note)
//     response.json(note)
// })