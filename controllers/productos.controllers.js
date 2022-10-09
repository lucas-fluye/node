import * as ProductosServices from "../services/productos.services.js"

function verTodos(req, res) {
    ProductosServices.traerProductos()
        .then(function (projects) {
            res.render("Productos/Lista", { projects })
        })
}



function verUno(req, res) {
    const id = req.params.idProducto

    ProductosServices.traerProductoByID(id)
        .then(function (project) {
            if (project) {
                res.render("Productos/Ver", { project })
            } else {
                res.render("404", { message: "Producto no encontrado" })
            }
        })
}

function formNuevo(req, res) {
    res.render("Productos/Cargar", {project:{}})
}

function guardar(req, res) {
    // armo lo que quiero guardar
    const project = {
        name: req.body.name,
        description: req.body.description,
        link: req.body.link,
        img: req.body.img,
        public: req.body.public
    }
    

    // guardo el producto
    ProductosServices.guardarProducto(project)
        .then(function (nuevoProducto) {
            res.render("Success", { message: `El producto se guardó con exito <a href="/admin/productos">Ver Productos</a>` })
        })
        .catch(function (err) {
            res.render("Error", { message: err.message })
        })
}

function formEliminar(req, res) {
    const id = req.params.idProducto

    ProductosServices.traerProductoByID(id)
        .then(function (project) {
            if (project) {
                res.render("Productos/Eliminar", { project })
            } else {
                res.render("404", { message: "Producto no encontrado" })
            }
        })
}

function eliminar(req, res) {
    const id = req.params.idProducto

    ProductosServices.eliminarProducto(id)
        .then(function () {
            res.render("Success", { message: `El producto se elimino con exito <a href="/admin/productos">Ver Productos</a>` })
        })
        .catch(function (err) {
            res.render("Error", { message: err.message })
        })
}

function formEditar(req, res) {
    const id = req.params.idProducto

    ProductosServices.traerProductoByID(id)
        .then(function (project) {
            if(project){
                res.render("Productos/Cargar", {project})
            }
            else{
                res.render("404", {message:"producto no encontrado"})
            }
            
        })
        

}

function editar(req, res) {
    const id = req.params.idProducto

    const project = {
        name: req.body.name,
        description: req.body.description,
        link: req.body.link,
        img: req.body.img,
        public: req.body.public
    }


    ProductosServices.editarProducto(id, project)
        .then(function () {
            res.render("Success", { message: `Se actualizo correctamente <a href="/admin/productos">Ver Productos</a>` })
        })

}


export {
    verTodos,
    verUno,
    guardar,
    formNuevo,
    formEliminar,
    eliminar,
    formEditar,
    editar,
    
}