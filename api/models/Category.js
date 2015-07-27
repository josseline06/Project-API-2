var Waterline = require('waterline');

module.exports = Waterline.Collection.extend({
	tableName: 'app_category',
	connection: 'local-postgresql',
	attributes: {
		description:{ 
			type: 'string',
			required: true
		},
		tasks: {
			collection: 'app_task', 
			via: 'category'
		}
	}
});