import express from 'express'
import * as HomeController from '../controllers/home.controllers.js'
import * as EstudiosController from '../controllers/estudios.controllers.js'
import * as AdminController from '../controllers/admin.controllers.js'
import * as TecController from '../controllers/tec.controllers.js'

const route = express.Router()

route.get('/', HomeController.verHome)
route.get('/tecnologias', TecController.verTec)
route.get('/estudios', EstudiosController.verEstudios)
route.get('/admin', AdminController.verAdmin)


export default route