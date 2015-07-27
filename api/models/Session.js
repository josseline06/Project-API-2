var Waterline = require('waterline');

module.exports = Waterline.Collection.extend({
	tableName: 'app_session',
	connection: 'local-postgresql',
	attributes: {
		token:{ 
			type: 'string',
			required: true
		},
		user: {
			model: 'app_user',
			columnName: 'user_id'
		}
	}
});