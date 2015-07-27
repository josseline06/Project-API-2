var bcrypt = require('bcrypt');

module.exports = {
	encrypted_password: function(password, callback){
		bcrypt.genSalt(10, function(err, salt){
			if(err)	return callback(err);
			bcrypt.hash(password, salt, function(err, hash){
				return callback(err, hash);
			});

		});
	},
	compare_password: function(password, userpasswd, callback){
		bcrypt.compare(password, userpasswd, function(err, is_match){
			if (err) return callback(err);
			return callback(null, is_match);
		});

	}
};