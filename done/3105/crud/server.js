const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const MongoClient = require('mongodb').MongoClient

// Make sure you place body-parser before your CRUD handlers!
app.use(bodyParser.urlencoded({ extended: true }))

MongoClient.connect('mongodb+srv://Alex:PASSWORD@cluster0.ouokdy5.mongodb.net/any-quotes?retryWrites=true&w=majority', { useUnifiedTopology: true })
  .then(client => {
    console.log('Connected to Database')
    const db = client.db('any-quotes')
    const quotesCollection = db.collection('quotes')

    // MUST be placed before any app.use, app.get or app.post
    app.set('view engine', 'ejs')
    app.use(express.static('public'))
    app.use(bodyParser.json())

    app.get('/', (req, res) => {
        db.collection('quotes').find().toArray()
          .then(results => {
            // console.log(results)
            res.render('index.ejs', {quotes: results})
          })
          .catch(error => console.error(error))
        
      })

    app.post('/quotes', (req, res) => {
        quotesCollection.insertOne(req.body)
          .then(result => {
            res.redirect('/')
          })
          .catch(error => console.error(error))
      })
      app.listen(3000, function() {
        console.log('listening on 3000')
    })

    app.put('/quotes', (req, res) => {
        quotesCollection.findOneAndUpdate(
            {name: 'Tom'},
            {
                $set: {
                    name: req.body.name,
                    quote: req.body.quote
                }
            },
            // options...
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
            {name: req.body.name},
        )
        .then(result => {
            if (result.deletedCount === 0) {
                return res.json('No quote to delete')
            }
            res.json(`Deleted Luigi's quote`)
        })
        .catch(error => console.error(error))
    })

  })
  .catch(error => console.error(error))



// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/index.html')
// })
