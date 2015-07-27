var express = require('express');
var app = express();
var orm = require('./orm/config.js')

var port = process.env.PORT || 8080; // port where app will be runing

orm.initialize(app, port, function(collections, connections) {  
    // store the collections and connections retrieved to the app instance
    app.models = collections; 
    app.connections = connections;

    var server = app.listen(port, function() {
      console.log('El servidor esta corriendo en el puerto ' + server.address().port);
    });
});