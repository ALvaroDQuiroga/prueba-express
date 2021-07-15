const express = require ('express');

const app = express();

const port = 4000;

const path = require('path')

/* configuraciones */
app.use(express.static('public'))

app.listen(port, () => console.log(`
------------------------------------
Servidor corriendo en el puerto ${port}
== Link ==> http://localhotst:${port}
------------------------------------`
 ) )
//Rutas
 app.get( '/',(req,res) => res.sendFile(path.join(__dirname,'views','home.html' ) ) ) ;
//pregunta //respuesta //  ./views/home.

app.get( '/registtrate',(req, res) => res.send('registrate') )

app.get('/login' , (req, res) => res.send('login'))

