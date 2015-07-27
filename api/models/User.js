var Waterline = require('waterline');

module.exports = Waterline.Collection.extend({
	identity : 'user',
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