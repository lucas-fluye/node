import * as HomeServices from "../services/home.services.js"

function verHome(req, res) {
    HomeServices.traerHome()
    .then(function (projects) {
        res.render('Home', {projects})
    })
}



export{
    verHome
    
}