//      Run these in the terminal for new VS files
//      npm init -y
//      npm i express
//      node index.js     
//      npm i dotenv
//      npm i react express-react-views

require('dotenv').config()

const express = require ('express')
const app = express ()

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.use('/places', require('./controllers/places'))

app.get('/', (req, res) => {
    res.render('home')
})

app.get('*', (req, res) => {
    res.render('error404')
})

app.listen(process.env.PORT)
