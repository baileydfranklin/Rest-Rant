require('dotenv').config()

const express = require ('express')
const app = express ()

app.use('/places', require('./controllers/places'))

app.get('/', (req, res) => {
    res.send('Hellow World!')
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
