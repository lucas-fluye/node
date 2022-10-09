import * as AdminServices from "../services/home.services.js"

function verAdmin(req, res) {
    AdminServices.traerHome()
    .then(function (projects) {
        res.render('Admin', {projects})
    })
}

export{
    verAdmin
}