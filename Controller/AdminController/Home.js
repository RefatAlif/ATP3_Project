var express=require('express');
var router=express.Router();

router.get('/',function(req,res){
  var navLinkLabel=['Account','User Report','Product Report','Sell Request','Logout'];
  var navLinks=['/Account','/uReport','/pReport','/SellRequest','/Logout'];
  if(req.session.username!=null){
    res.render('index',{
      title:'Buy From Ali | Home',
      navLinkLabel:navLinkLabel,
      navLinks:navLinks
    });
  }
  else{
    res.redirect('/Login');
  }
});

module.exports=router;
