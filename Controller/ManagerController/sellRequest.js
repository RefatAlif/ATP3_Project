var express = require('express');
var router = express.Router();
var requestModel  = require.main.require('./models/AdminModel/request');


router.get('/', function(req, res){
  if(req.session.usertype=="manager"){
var navLinkLabel=['Account','Transaction','User Report','Product Report','Buy Request','Sell Request','Logout'];
var navLinks=['/_Account','/_transaction','/_uReport','/_pReport','/_BuyRequest','/_SellRequest','/Logout'];
var thead=['P. Name','P. Type','P. Size','P. Color','Place of origin','Unit Price', 'Quantity','Status','Action','Action'];
var linkName=['Accept','Reject'];
var link=['/_SellRequest/Accept/product?id=','/_SellRequest/Reject/product?id='];
var data=[];
  requestModel.getSellRequests(function(result){
    for(var i=0; i<result.length; i++){
      data.push([result[i].product_name,result[i].product_type,result[i].product_size,result[i].product_color,result[i].place_of_origin,result[i].unit_price,result[i].total_quantity,result[i].status,result[i].id]);
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
}
else{
  res.redirect('/Login');
}
});


router.get('/Accept/product', function(req, res){
  if(req.session.usertype=="manager"){
    var id=req.query.id;
    console.log(id);
      requestModel.productStatusUpdate("accepted",id,function(status){
          res.redirect('/_SellRequest');
      });
  }
  else{
    res.redirect('/Login');
  }
});

router.get('/Reject/product', function(req, res){
  if(req.session.usertype=="manager"){
    var id=req.query.id;
      requestModel.productStatusUpdate("rejected",id,function(status){
          res.redirect('/_SellRequest');
      });
  }
  else{
    res.redirect('/Login');
  }
});


module.exports = router;
