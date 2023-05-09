const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const routes = require('./routes')

require('dotenv').config()


const app = express()

mongoose.connect(process.env.MONGO_DB, {
    useUnifiedTopology: true,
    useNewUrlParser: true
}, console.log('Banco de dados conectado com sucesso😄🚀'))

app.use(cors())
app.use(express.json())
app.use(routes)


app.listen(3333, () => console.log('Servidor Conectado😁👍'))



