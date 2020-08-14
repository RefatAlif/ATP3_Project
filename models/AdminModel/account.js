var db = require.main.require('./models/database/database');

module.exports ={

	getInformation: function(id, callback){
		var sql = "select * from users_info where id="+id;
		db.getResults(sql, function(result1){
			if(result1.length > 0){
        var sql = "select * from users where info_id="+id;
        db.getResults(sql, function(result2){
          if(result2.length > 0){
				      callback(result1[0],result2[0]);
            }
            else{
      				callback([],[]);
            }
          });
			}else{
				callback([]);
			}
		});
	},

	userUpdate: function(user, callback){
		var sql = "UPDATE users_info SET fullname='"+user[1]+"',address1='"+user[2]+"',address2='"+user[3]+"',phone='"+user[4]+"',email='"+user[5]+"' where id="+user[0]+"";
    //console.log(sql);
    db.execute(sql, function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
	}
}
