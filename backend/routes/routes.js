const Router = require('express').Router();

const ciudadesControllers = require('../controllers/ciudadesController');
const ciudadesController = require('../controllers/ciudadesController')
const {consultarCiudades}=ciudadesControllers

Router.route('/ciudades')
.get(consultarCiudades)


module.exports = Router