const Router = require('express').Router()


const ciudadesController = require('../controllers/ciudadesControllers')

const {obtenerCiudades, cargarCiudad, borrarCiudad, modificarCiudad} = ciudadesController

Router.route('/allcities')
.get(obtenerCiudades)
.post(cargarCiudad)


Router.route('/allcities/:id')
.delete(borrarCiudad)
.put(modificarCiudad)
module.exports = Router