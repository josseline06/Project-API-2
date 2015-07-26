var Waterline = require('Waterline');
var orm = new Waterline();
var connectionConfig = require('../configs/connection.js');

var fs = require('fs');
var path = require('path');

// Cargando los modelos al ORM
fs.readdirSync('../models/').filter(function(file){
	return (file.indexOf('.') !== 0);
}).forEach(function(file){
	var model = require(path.join('../models/', file));
	orm.loadCollection(model);
});

// Exportando el ORM como un objeto
module.exports = {};

// Función que inicializa la configuración de Waterline
module.exports.initialize = function(app, port, callback) {  
	orm.initialize(connectionConfig, function(err, models) {
		if(err) throw err;
		callback(models.collections, modelos.connections);

	});
}