const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv').config()

const auth = require('./routes/auth')
const meals = require('./routes/meals')
const orders = require('./routes/orders')

const app = express()
app.use(bodyParser.json())
app.use(cors())

const uri = process.env.DB_DRIVER;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })

app.use('/api/auth', auth)
app.use('/api/meals', meals)
app.use('/api/orders', orders)
app.get('/api', (req, res) => {
    res.setHeader('Content-Type', 'text/html')
    res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate')
    res.send('This is my great API!');
})

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on ${port}, http://localhost:${port}`));


module.exports = app
