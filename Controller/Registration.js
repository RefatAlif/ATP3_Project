var express = require('express');
var router = express.Router();
var userModel 	= require.main.require('./models/AdminModel/user');

router.get('/',function(req,res){
  var navLinkLabel=['Account','User Report','Product Report','Buy Request','Sell Request','Logout'];
  var navLinks=['/Account','/uReport','pReport','/BuyRequest','SellRequest','/Logout'];
  res.render('account',{
    title:'Buy From Ali | Login',
    navLinkLabel:navLinkLabel,
    navLinks:navLinks
  });
});

router.post('/', function(req, res){

  var user = {
		uname: req.body.uname,
		password: req.body.upass,
    fullname: req.body.fullname,
    address: req.body.address,
    phone: req.body.phone,
    email: req.body.email
	};

  userModel.addUser(user, function(result){
		if(result!=0){
      res.send('Successfully Saved');
		}
    else{
			res.send('invalid information');
		}
	});
});

module.exports = router;
