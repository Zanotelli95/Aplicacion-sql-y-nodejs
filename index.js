import express from 'express'
const app = express()
import {conectar, agregarContacto, borrarContacto, obtenerContactos} from './src/mysql_conector.js'
let todos
//iniciamos servidos
app.listen('8000', function(){
    console.log('funcionando')
})

//configuracion pug 
app.set('views', './vistas')
app.set('view engine', 'pug')

//configuracion archivos 
app.use(express.static('./vistas'))
app.use(express.static('./src'))
app.use(express.static('./css'))


app.get ('/', function(req, res){
    //conectar()
    todos = obtenerContactos()
    //también pasamos contactos y datos
    res.render('index', {titulo: 'Aplicación de contactos', contactos:todos})
})

app.get('/agregar/:nombre/:numero', function(req, res){
    let nombre = req.params.nombre
    let numero = req.params.numero
    agregarContacto(numero, nombre)
    res.redirect('/')
    console.log(nombre, numero)
})

app.get('/borrar/:id', function(req, res){
    let id = req.params.id
    borrarContacto(id)
    res.redirect('/')
})