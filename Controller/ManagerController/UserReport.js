var express = require('express');
var router = express.Router();
var userModel 	= require.main.require('./models/AdminModel/user');
var productModel 	= require.main.require('./models/AdminModel/product');


router.get('/', function(req, res){
  var navLinkLabel=['Account','Transaction','User Report','Product Report','Buy Request','Sell Request','Logout'];
  var navLinks=['/_Account','/_transaction','/_uReport','/_pReport','/_BuyRequest','/_SellRequest','/Logout'];
var thead=['username','password','usertype','permission','Block User Access','Unblock User Access'];
var linkName=['Block','Unblock'];
var link=['/_uReport/Block/user?id=','/_uReport/Unblock/user?id='];
var data=[];
  userModel.getAllFromManager(function(result){
    for(var i=0; i<result.length; i++){
      data.push([result[i].username,result[i].password,result[i].usertype,result[i].permission,result[i].id]);
    }
    console.log(data);
    res.render('report',{
      msg:"All Users Information",
      hdata:thead,
      rows:data,
      linkName:linkName,
      links:link,
      navLinkLabel:navLinkLabel,
      navLinks:navLinks
    });
	});
});

router.get('/Block/user',function(req,res){
  var id =req.query.id;
  //res.send(id);
  userModel.blockUser(id,function(status){
    // if(status){
      res.redirect('/_uReport');
      //res.send("Changed");
    // }
  });
    //res.redirect('/uReport');
});

router.get('/Unblock/user',function(req,res){
  var id =req.query.id;
  //res.send(id);
  userModel.unblockUser(id,function(status){
    // if(status){
      res.redirect('/_uReport');
      //res.send("Changed");
    // }
  });
    //res.redirect('/uReport');
});

module.exports = router;
