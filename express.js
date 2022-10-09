import express from 'express'
import ProductosRoute from './routes/productos.routes.js'
import CategoriasRoute from './routes/categorias.routes.js'
import HomeRoute from './routes/home.routes.js'

const app = express()

app.set("view engine", "ejs")

app.use(express.urlencoded({ extended: true }))

app.use('/', express.static('public'))



app.use('/', ProductosRoute)
app.use('/', CategoriasRoute)

app.use('/', HomeRoute)
app.use('/estudios', HomeRoute)
app.use('/tecnologias', HomeRoute)
app.use('/admin', HomeRoute)

app.listen(2022, function () {
    console.log('El servidor esta on! http://localhost:2022')
})