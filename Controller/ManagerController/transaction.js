var express = require('express');
var router = express.Router();
var requestModel 	= require.main.require('./models/AdminModel/transaction');


router.get('/', function(req, res){
  var navLinkLabel=['Account','Transaction','User Report','Product Report','Buy Request','Sell Request','Logout'];
  var navLinks=['/_Account','/_transaction','/_uReport','/_pReport','/_BuyRequest','/_SellRequest','/Logout'];
var thead=['P. Name','P. Type','P. Size','P. Color','Unit Price', 'Quantity','Total Price','Payment By','Transaction No','Status'];
var linkName=[];
var link=[];
var data=[];
  requestModel.getAllTransactions(function(result){
    for(var i=0; i<result.length; i++){
      data.push([result[i].product_name,result[i].product_type,result[i].product_size,result[i].product_color,result[i].unit_price,result[i].total_quantity,result[i].total_price,result[i].paymentBy,result[i].transaction_num,result[i].status,result[i].id]);
    }
    //console.log(data);
    res.render('report',{
      msg:"All Transactions",
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
