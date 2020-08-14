var express = require('express');
var router = express.Router();
var requestModel 	= require.main.require('./models/AdminModel/request');


router.get('/', function(req, res){
  var navLinkLabel=['Account','User Report','Product Report','Sell Request','Logout'];
  var navLinks=['/Account','/uReport','/pReport','/SellRequest','/Logout'];
var thead=['P. Name','P. Type','P. Size','P. Color','Place of origin','Unit Price', 'Quantity','Action','Action'];
var linkName=['Accept','Reject'];
var link=['/sellRequest/Accept/product?id=','/sellRequest/Reject/product?id='];
var data=[];
  requestModel.getSellRequests(function(result){
    for(var i=0; i<result.length; i++){
      data.push([result[i].product_name,result[i].product_type,result[i].product_size,result[i].product_color,result[i].place_of_origin,result[i].unit_price,result[i].total_quantity,result[i].id]);
    }
    console.log(data);
    res.render('report',{
      msg:"Selling Request",
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
