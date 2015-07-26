var Waterline = require('waterline');

module.exports = Waterline.Collection.extend({
	identity = 'task',
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
	},
	// Encripta el password
	beforeCreate: function(values, next){
		var bcrypt = require('bcrypt');

		bcrypt.genSalt(10, function(err, salt){
			if(err) return next(err);

			bcrypt.hash(values.password, salt, function(err, hash){
				if(err) return next(err);

				values.password = hash;
				next();
			});
		});
	}
});