var express=require('express');
var router=express.Router();

router.get('/',function(req,res){
  var navLinkLabel=['Home','Login','Logout'];
  var navLinks=['/home','/Login','/Logout'];
    res.render('index',{
      title:'Buy From Ali | Home',
      navLinkLabel:navLinkLabel,
      navLinks:navLinks
    });
});

module.exports=router;
