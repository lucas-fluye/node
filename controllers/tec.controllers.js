import * as HomeServices from "../services/home.services.js"

function verTec(req, res) {
    HomeServices.traerHome()
    .then(function (projects) {
        res.render('Tecnologias', {projects})
    })
}



export{
    verTec
    
}