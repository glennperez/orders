const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')

const auth = require('./routes/auth')
const meals = require('./routes/meals')
const orders = require('./routes/orders')

const app = express()
app.use(bodyParser.json())
app.use(cors())

const uri = "mongodb+srv://root:gcn9GGJYOGa96WwL@cluster0.u2dmw.mongodb.net/almuerzi-db?retryWrites=true&w=majority"
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })

app.use('/api/auth', auth)
app.use('/api/meals', meals)
app.use('/api/orders', orders)
app.get('/', (req, res) => res.send('This is my great API!'));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on ${port}, http://localhost:${port}`));


//module.exports = app