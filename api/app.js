var dir = require('dir'), 
	express = require('express'), 
	app = express(), 
	orm = require(dir.orm)

var port = process.env.PORT || 8080; // port where app will be runing

orm.initialize(app, port, function(collections, connections){  
    app.models = collections; 
    app.connections = connections;

    var server = app.listen(port, function() {
      console.log('El servidor esta corriendo en el puerto ' + server.address().port);
    });
});