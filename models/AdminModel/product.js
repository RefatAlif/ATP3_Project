var db = require.main.require('./models/database/database');

module.exports ={

	get: function(id, callback){
		var sql = "select * from users where id="+id;
		db.getResults(sql, function(result){
			if(result.length > 0){
				callback(result[0]);
			}else{
				callback([]);
			}
		});
	},

	getAllPaidProducts: function(callback){
		var sql = "select * from product_details where status!='pending'";
		db.getResults(sql, function(result){
			if(result.length > 0){
				callback(result);
			}else{
				callback([]);
			}
		});
	},

	getAllPendingProducts: function(callback){
		var sql = "select * from product_details where status='pending'";
		db.getResults(sql, function(result){
			if(result.length > 0){
				callback(result);
			}else{
				callback([]);
			}
		});
	},

	productStatusUpdate: function(status,id, callback){
		var sql = "update product_details set STATUS='"+status+"' where id="+id;
		db.execute(sql, function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
	},

	productDelete: function(id, callback){
		var sql = "delete from user where id="+id;
		db.execute(sql, function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
	}
}
