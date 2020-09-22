const express = require('express')
const morgan  = require('morgan')
const cors    = require('cors')

const app = express()

app.set('port', process.env.PORT || 4000)

// nos permite aceptar otras peticiones de otro servidor
app.use(cors())

// para el caso de que angular tiene este puerto y solo queremos recibir peticiones de esta IP
// app.use(cors({origin: "http://localhost:4200"})) 

app.use(morgan('dev'))

// Para que express entienda objetos JSON
app.use(express.json())

// Para que entienda los datos que viene de un formulario HTML
app.use(express.urlencoded({ extended : false }))

app.use('/api/employees', require('./routes/employees.routes.js'))

module.exports = app