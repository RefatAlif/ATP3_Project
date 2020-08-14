var express = require('express');
var router = express.Router();
var userModel 	= require.main.require('./models/AdminModel/user');
var productModel 	= require.main.require('./models/AdminModel/product');

router.get('/users',function(req,res){
    res.render('report',{
      title:'Buy From Ali | Home'
  });
});

router.get('/', function(req, res){
  var navLinkLabel=['Account','User Report','Product Report','Sell Request','Logout'];
  var navLinks=['/Account','/uReport','/pReport','/SellRequest','/Logout'];
var thead=['Name','Type','Size','Color','Unit Price','Action','Action'];
var linkName=['Edit','Delete'];
var link=['/Report/Edit/product?id=','/Report/Delete/product?id='];
var data=[];
  productModel.getAll(function(result){
    for(var i=0; i<result.length; i++){
      data.push([result[i].product_name,result[i].product_type,result[i].product_size,result[i].product_color,result[i].unit_price,result[i].id]);
    }
    console.log(data);
    res.render('report',{
      msg:"All Products Information",
      hdata:thead,
      rows:data,
      linkName:linkName,
      links:link,
      navLinkLabel:navLinkLabel,
      navLinks:navLinks
    });
	});
});

module.exports = router;
