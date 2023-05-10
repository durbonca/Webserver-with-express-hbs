require('dotenv').config();
const express = require('express')
const hbs = require('hbs');

const PORT = process.env.PORT;
const app = express()

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials', function (err) { });

// servir contenido estatico
app.use(express.static('public'))

app.get('/', function (req, res) {
    res.render('home', {
        nombre: 'Fernando Herrera',
        titulo: 'Curso de Node'
    })
})

app.get('/generic', function (req, res) {
    res.render('generic', {
        nombre: 'Fernando Herrera',
        titulo: 'Curso de Node'
    })
})

app.get('/elements', function (req, res) {
    res.render('elements', {
        nombre: 'Fernando Herrera',
        titulo: 'Curso de Node'
    })
})

app.get('*', function (req, res) {
    res.sendFile(__dirname + '/public/404.html');
})

app.listen(PORT, () => {
    console.log('Escuchando el puerto', PORT)
})