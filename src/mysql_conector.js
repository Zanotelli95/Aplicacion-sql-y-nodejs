//importar mysql
import mysql from 'mysql'
let todos
//creando conexión
const conector = mysql.createConnection({
    host : 'localhost',
    database : 'agenda_contactos',
    user : 'zanotelli',
    password : '123456'

})

const conectar = () => {
    conector.connect(err => {
        if(err) 
          throw err
                console.log('conectado')
            
    })
}

//datos para sql los cuales corresponden al mismo sql
const agregarContacto = (numero, nombre) => {
    const sql = `INSERT INTO agenda (id_agenda, numero_contacto, nombre_contacto) VALUES (${null}, ${numero}, "${nombre}")`
        conector.query(sql, function(err, result, filed){
                if(err) throw err
                console.log(result)
        })
}


const obtenerContactos = ()=> {
    const sql = `SELECT * FROM agenda`
    conector.query(sql, function(err, result, field){
        todos = result
    })
    return todos
}


const borrarContacto = id => {
    const sql = `DELETE FROM agenda where id_agenda=${id}`
    conector.query(sql)
}

export {conectar, agregarContacto, obtenerContactos, borrarContacto}