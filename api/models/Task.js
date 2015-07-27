var Waterline = require('waterline');

module.exports = Waterline.Collection.extend({
	tableName: 'app_task',
	connection: 'local-postgresql',
	attributes: {
		description:{ 
			type: 'string',
			required: true
		},
		target_date:{
			type: 'datetime',
			required: true
		},
		is_done: {
			type: 'boolean',
			required: true,
			defaultsTo: false
		},
		priority: {
			type: 'string',
			enum: ['normal', 'urgent'],
			defaultsTo: 'normal'
		},
		owner: {
			model: 'app_user', 
			columnName: 'owner_id'
		},
		category: {
			model: 'app_category',
			columnName: 'category_id'
		}
	}
});