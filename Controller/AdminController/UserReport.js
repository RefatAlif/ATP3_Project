var express = require('express');
var router = express.Router();
var userModel 	= require.main.require('./models/AdminModel/user');
var productModel 	= require.main.require('./models/AdminModel/product');
var accountModel 	= require.main.require('./models/AdminModel/account');

router.get('/users',function(req,res){
    res.render('Report',{
      title:'Buy From Ali | Home'
  });
});

router.get('/', function(req, res){
  var navLinkLabel=['Account','User Report','Product Report','Sell Request','Logout'];
  var navLinks=['/Account','/uReport','/pReport','/SellRequest','/Logout'];
var thead=['username','password','usertype','permission','Block User Access','Unblock User Access','Action','Action'];
var linkName=['Block','Unblock','Delete','Details'];
var link=['/uReport/Block/user?id=','/uReport/Unblock/user?id=','/uReport/Delete/user?id=','/uReport/Details/user?id='];
var data=[];
  userModel.getAll(function(result){
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
      res.redirect('/uReport');
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
      res.redirect('/uReport');
      //res.send("Changed");
    // }
  });
    //res.redirect('/uReport');
});

router.get('/Details/user',function(req,res){
  var id =req.query.id;
  var navLinkLabel=['Account','User Report','Product Report','Sell Request','Logout'];
  var navLinks=['/Account','/uReport','/pReport','/SellRequest','/Logout'];
  var label=['User Name','Password','Full Name','Address','Phone','Email','Loyality Point'];
  var data=[];
  accountModel.getInformation(id,function(result1,result2){
      data.push(result2.username);
      data.push(result2.password);
      data.push(result1.fullname);
      data.push(result1.address);
      data.push(result1.phone);
      data.push(result1.email);
      data.push(result1.loyalty);
      data.push(result1.id);
    console.log(data);
    res.render('myAccount',{
      label:label,
      data:data,
      navLinkLabel:navLinkLabel,
      navLinks:navLinks
    });
  });
    //res.redirect('/uReport');
});

router.get('/Update/user',function(req,res){
  var id =req.query.id;
  userModel.userDelete(id,function(status){
    // if(status){
      res.redirect('/uReport');
      //res.send("Changed");
    // }
  });
    //res.redirect('/uReport');
});
module.exports = router;
