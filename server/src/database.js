const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/mean-employees', {
    useUnifiedTopology : true, // Para que mongoose no muestre los msj de alerta en la consola
    useNewUrlParser    : true,
    useFindAndModify   : false // Cuando actualice un dato, ya no va salir un error
})
.then((db) => console.log('Db is connected'))
.catch((err) => console.log(err))