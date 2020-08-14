var db = require.main.require('./models/database/database');

module.exports ={


	getBuyRequests: function(callback){
		var sql = "select * from product_details where status='pending' and id IN(select product_id from buyers_orderlist )";
		db.getResults(sql, function(result){
			if(result.length > 0){
				callback(result);
			}else{
				callback([]);
			}
		});
	},
	getBuyRequestById: function(id,callback){
		var sql = "select * from product_details where id="+id;
		console.log(sql);
		db.getResults(sql, function(result){
			if(result.length > 0){
				callback(result[0]);
			}else{
				callback([]);
			}
		});
	},

  getSellRequests: function(callback){
		var sql = "select * from sell_requests";
		db.getResults(sql, function(result){
			if(result.length > 0){
				callback(result);
			}else{
				callback([]);
			}
		});
	},

	productStatusUpdate: function(status,id, callback){
		var sql = "update sell_requests set STATUS='"+status+"' where id="+id;
		console.log(sql);
		db.execute(sql, function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
	},

	getSellRequestById: function(id,callback){
		var sql = "select * from sell_requests where id="+id;
		db.getResults(sql, function(result){
			if(result.length > 0){
				callback(result);
			}else{
				callback([]);
			}
		});
	}
}
