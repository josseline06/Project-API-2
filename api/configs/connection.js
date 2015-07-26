var postgres_adapter = require('sails-postgresql');
var disk_adapter = require('sails-disk');

module.exports  = {
	adapters: {
		default: postgres_adapter,
		disk: disk_adapter,
		postgres: postgres_adapter
	},
	connections: {
		'local-postgresql': {
			adapter: 'postgres',
			host: 'localhost',
			port: '8080',
			database: 'wonderlist',
			user: 'postgres',
			password: 'postgres',
			pool: false,
  			ssl: false
		}, 
		'local-disk':{
			adapter: 'disk'
		}
	},
	defaults: {
		migrations: 'alter'
	}
}