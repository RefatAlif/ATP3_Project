var express = require('express');
var router = express.Router();
var accountModel 	= require.main.require('./models/AdminModel/account');

router.get('/',function(req,res){
  if(req.session.username!=null){
    var id=req.session.userid;
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
  }
  else{
    res.redirect('/Login');
  }
  });

router.post('/',function(req,res){
      var data=[];
          data.push(req.session.userid);
          data.push(req.body.num2);
          data.push(req.body.num3);
          data.push(req.body.num4);
          data.push(req.body.num5);
          data.push(req.body.num6);
          data.push(req.body.num7);
          console.log(data);
          accountModel.userUpdate(data,function(status){
            if(status){
              res.redirect('/Account');
            }
            else{
              res.redirect('/');
            }
    	});
    });
module.exports = router;
