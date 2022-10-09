import { MongoClient, ObjectId } from 'mongodb'
const client = new MongoClient('mongodb://127.0.0.1:27017')

async function traerProductos() {
    return client.connect()
        .then(async function () {
            const db = client.db('AH_P1')
            return db.collection('Projects').find().toArray()
        })
}

async function traerProductoByID(id) {
    return client.connect()
        .then(function () {
            const db = client.db('AH_P1')
            return db.collection('Projects').findOne({ _id: new ObjectId(id) })
            
        })

}



async function guardarProducto(producto) {
    const nuevoProducto = {
        ...producto
    }

    return client.connect()
        .then(function () {
            return client.db('AH_P1').collection('Projects').insertOne(nuevoProducto)
        })
        .then(function (result) {
            return nuevoProducto
        })
}

async function eliminarProducto(id) {
    return client.connect()
        .then(function () {
            return client.db('AH_P1').collection('Projects').deleteOne({ _id: new ObjectId(id) })
        })
        .then(function () {
            return true
        })

}

async function editarProducto(id, producto) {
    return client.connect()
        .then(function () {
            return client.db('AH_P1').collection('Projects').updateOne({ _id: new ObjectId(id) }, { $set: producto })
        })

}


export {
    traerProductos,
    traerProductoByID,
    guardarProducto,
    eliminarProducto,
    editarProducto,
    
}