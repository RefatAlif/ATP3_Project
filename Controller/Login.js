var express = require('express');
var router = express.Router();
var userModel   = require.main.require('./models/AdminModel/user');

router.get('/',function(req,res){
  var navLinkLabel=[];
  var navLinks=[];
  res.render('account',{
    title:'Buy From Ali | Login',
    navLinkLabel:navLinkLabel,
    navLinks:navLinks
  });
});

router.post('/', function(req, res){

  var user = {
    uname: req.body.uname,
    password: req.body.upass
  };

  userModel.userValidation(user, function(result){
    if(result.length>0){
      if(result[0].permission==1){
        req.session.usertype = result[0].usertype;
        req.session.username = result[0].username;
        req.session.userid = result[0].info_id;
        //console.log(result);
        if(result[0].usertype=="admin"){
            //console.log("Admin Login");
             res.redirect('/ahome');
        }else if(result[0].usertype=="manager"){
          //console.log("Manager Login");
          res.redirect('/_home');
        }else if(result[0].usertype=="buyer"){
          res.redirect('/home');
        }
      }
      else if(result[0].permission==0){
        res.send('You have no permission !');
      }
    }
    else{
      res.send('invalid username/password');
    }
  });
});

module.exports = router;
