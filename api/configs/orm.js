var dir = require('dir'),
	fs = require('fs'),
	path = require('path'),
	waterline = require('waterline'),
	orm = new waterline(), 
	connectionConfig = require(dir.connection);

// Cargando los modelos al ORM
fs.readdirSync(dir.models).filter(function(file){
	return (file.indexOf('.') !== 0);
}).forEach(function(file){
	var model = require(path.join(dir.models, file));
	orm.loadCollection(model);
});

// Exportando el ORM como un objeto
module.exports = {};

// Función que inicializa la configuración de Waterline
module.exports.initialize = function(app, port, callback) {  
	orm.initialize(connectionConfig, function(err, models) {
		if(err) throw err;
		callback(models.collections, models.connections);

	});
}