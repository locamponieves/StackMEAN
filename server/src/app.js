const express = require('express')
const morgan  = require('morgan')

const app = express()

app.set('port', process.env.PORT || 4000)

app.use(morgan('dev'))

// Para que express entienda objetos JSON
app.use(express.json())

// Para que entienda los datos que viene de un formulario HTML
app.use(express.urlencoded({ extended : false }))

app.use('/api/employees', require('./routes/employees.routes.js'))

module.exports = app