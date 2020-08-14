var express=require('express');
var router=express.Router();

router.get('/',function(req,res){
  var navLinkLabel=['Account','Transaction','User Report','Product Report','Buy Request','Sell Request','Logout'];
  var navLinks=['/_Account','/_transaction','/_uReport','/_pReport','/_BuyRequest','/_SellRequest','/Logout'];
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
