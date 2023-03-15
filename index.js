//      Run these in the terminal for new VS files
//      npm init -y
//      npm i express
//      node index.js     
//      npm i dotenv
//      npm i react express-react-views

require('dotenv').config()

const express = require ('express')
const app = express ()

app.use('/places', require('./controllers/places'))

app.get('/', (req, res) => {
    res.send('The PORT is over 9000!!')
})

app.get('*', (req, res) => {
    res.status(404).send(`
        <body>
            <h1>404 Page</h1>
            <details>
                <summary><b>What does this mean?</b></summary>
                Page does not exist. Please return to the previous page!
            </details>
        </body>
    `)
})

app.listen(process.env.PORT)
