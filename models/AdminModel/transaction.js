var db = require.main.require('./models/database/database');

module.exports ={


	getAllTransactions: function(callback){
		var sql = "SELECT p.* , t.* from product_details as p,transaction as t where p.id in (SELECT product_id from transaction);";
		db.getResults(sql, function(result){
			if(result.length > 0){
				callback(result);
			}else{
				callback([]);
			}
		});
	}
}
