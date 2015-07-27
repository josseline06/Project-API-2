var Waterline = require('waterline'),
	dir = require('dir'),
	helpers = require(dir.helpers);

module.exports = Waterline.Collection.extend({
	tableName: 'app_user',
	connection: 'local-postgresql',
	attributes: {
		// identifica al usuario
		email:{ 
			type: 'email',
			required: true,
			unique: true
		},
		name:{
			type: 'string',
			required: true,
			minLength: 2,
			maxLength: 30
		},
		last_name:{
			type: 'string',
			required: true,
			minLength: 2,
			maxLength: 30
		},
		password: {
			type: 'string',
			required: true
		},
		city:{
			type: 'string',
			minLength: 2,
			maxLength: 30
		},
		country:{
			type: 'string',
			required: true,
			minLength: 2,
			maxLength: 30,
			defaultsTo: 'citzen of the world'
		},
		tasks: {
			collection: 'app_task',
			via: 'owner'
		},
		session: {
			model: 'app_session'
		}
	},
	beforeCreate: helpers.encrypted_password,
	beforeUpdate: helpers.encrypted_password
});