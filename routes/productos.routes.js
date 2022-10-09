import express from 'express'
import * as ProductosController from '../controllers/productos.controllers.js'

const route = express.Router()

route.get('/admin/productos', ProductosController.verTodos)

route.route('/admin/productos/nuevo')
    .get(ProductosController.formNuevo)
    .post(ProductosController.guardar)


route.route('/admin/productos/:idProducto/eliminar')
    .get(ProductosController.formEliminar)
    .post(ProductosController.eliminar)

route.route('/admin/productos/:idProducto/editar')
    .get(ProductosController.formEditar)
    .post(ProductosController.editar)

route.get('/admin/productos/:idProducto', ProductosController.verUno)

export default route