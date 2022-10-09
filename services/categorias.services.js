import { MongoClient } from "mongodb";

const client = new MongoClient('mongodb://127.0.0.1:27017')
const db = client.db('AH_P1')
const collection = db.collection('Projects')

async function traerCategorias(){
    return client.connect()
    .then(function(){
        return collection.find().toArray()
    })

}

export{
    traerCategorias
}