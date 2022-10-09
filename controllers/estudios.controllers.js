import * as HomeServices from "../services/home.services.js"

function verEstudios(req, res) {
    HomeServices.traerHome()
    .then(function (projects) {
        res.render('Estudios', {projects})
    })
}

export{
    verEstudios
}