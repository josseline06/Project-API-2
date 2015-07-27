var Waterline = require('waterline');

module.exports = Waterline.Collection.extend({
	identity : 'task',
	connection: 'local-postgresql',
	attributes: {
		// identifica al usuario
		description:{ 
			type: 'string',
			required: true
		},
		target_date:{
			type: 'date',
			required: true
		},
		is_done: {
			type: 'bolean',
			required: true,
			defaultsTo: false
		}
	}
});