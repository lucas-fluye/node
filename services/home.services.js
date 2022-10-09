import { MongoClient, ObjectId } from 'mongodb'
const client = new MongoClient('mongodb://127.0.0.1:27017')

async function traerHome() {
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

export{
    traerHome,
    traerProductoByID
}
