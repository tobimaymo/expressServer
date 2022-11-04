const express = require('express')
const Manager = require('./contenedor.js')
const manager = new Manager()

const app = express()

const server = app.listen(8080, () => console.log('Servidor Activo...'))

app.get('/productoRandom', (request, response) => {
    manager.getById(3).then(result => response.send(result))
})


app.get('/productos', (request, response) => {
    manager.getAll().then(result => response.send(result))
    
})