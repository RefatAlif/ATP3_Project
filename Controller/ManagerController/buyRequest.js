var express = require('express');
var router = express.Router();
var requestModel 	= require.main.require('./models/AdminModel/request');
var productModel 	= require.main.require('./models/AdminModel/product');

var navLinkLabel=['Account','Transaction','User Report','Product Report','Buy Request','Sell Request','Logout'];
var navLinks=['/_Account','/_transaction','/_uReport','/_pReport','/_BuyRequest','/_SellRequest','/Logout'];

router.get('/', function(req, res){
var thead=['P. Name','P. Type','P. Size','P. Color','Place of origin','Unit Price', 'Quantity','Total','Status','Action'];
var linkName=['Edit'];
var link=['/_BuyRequest/Edit/product?id='];
var data=[];
  requestModel.getBuyRequests(function(result){
    for(var i=0; i<result.length; i++){
      data.push([result[i].product_name,result[i].product_type,result[i].product_size,result[i].product_color,result[i].place_of_origin,result[i].unit_price,result[i].total_quantity,result[i].total_price,result[i].status,result[i].id]);
    }
    console.log(data);
    res.render('report',{
      msg:"Buying Request",
      hdata:thead,
      rows:data,
      linkName:linkName,
      links:link,
      navLinkLabel:navLinkLabel,
      navLinks:navLinks
    });
	});
});

router.get('/Edit/product',function(req,res){
  if(req.session.username!=null){
    var id=req.query.id;
    var label=['P. Name','P. Type','P. Size','P. Color','Place of origin','Unit Price','Quantity','Total Price'];
    var data=[];
    requestModel.getBuyRequestById(id,function(result){
        data.push(result.product_name);
        data.push(result.product_type);
        data.push(result.product_size);
        data.push(result.product_color);
        data.push(result.place_of_origin);
        data.push(result.unit_price);
        data.push(result.total_quantity);
        data.push(result.total_price);
        data.push(result.status);
        data.push(result.id);
      console.log(data);
      res.render('productStatusUpdate',{
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
  
  router.post('/Edit/product',function(req,res){
    if(req.session.username!=null){
      var id=req.query.id;
        productModel.productStatusUpdate(req.body.status,id,function(status){
            res.redirect('/_BuyRequest');
        });
    }
    else{
      res.redirect('/Login');
    }
    });
  module.exports = router;
