const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const MongoClient = require('mongodb').MongoClient
app.set('view engine', 'ejs')

app.use(express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

MongoClient.connect('mongodb+srv://alex:Test123@cluster-1.kdnzy6r.mongodb.net/?retryWrites=true&w=majority', { useUnifiedTopology: true })
    .then(client => {
        console.log('Connected to Database')
        const db = client.db('quotes-api')
        const quotesCollection = db.collection('quotes')

        // POST requests  
        app.post('/quotes', (req, res) => {
            quotesCollection.insertOne(req.body)
            .then(result => {
                // console.log(result)
                res.redirect('/')
            })
            .catch(error => console.log(error))
        })

        // GET requests
        app.get('/', (req, res) => {
            db.collection('quotes').find().toArray()
                .then(results => {
                    res.render('index.ejs', {quotes: results})
                })
                .catch(error => console.error(error))
        })

        // PUT requsts
        app.put('/quotes', (req, res) => {
            quotesCollection.findOneAndUpdate(
                {name: 'test'},
                {
                    $set: {
                        name: req.body.name,
                        quote: req.body.quote
                    }
                },
                {
                    upsert: true
                }
            )
            .then(result => {
                res.json('Success')
            })
            .catch(error => console.error(error))
        })
        app.delete('/quotes', (req, res) => {
            quotesCollection.deleteOne(
                {name: req.body.name}
            )
            .then(result => {
                if (result.deletedCount === 0) {
                    return res.json('No quote to delete')
                }
                res.json(`The quote was removed from history`)
            })
            .catch(error => console.error(error))
        })
})
.catch(console.error)

// Handlers starts here...
// app.get('/', (req,res) => {
//     res.sendFile(__dirname + '/index.html')
// })


const PORT = 3001
app.listen(PORT, function()  {
    console.log(`Listening on port ${PORT}`)
})

