// const http = require('http');
//
// const hostname = '127.0.0.1';
// const port = 3000;
//
// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.end('Hello World');
// });
//

//------------codes used in command prompt
//npm install -g bower ->for bootstrap install
//bower i bootstrap  -> install bootstarp with jquery
//------------ending

var express=require('express');
var app=express();
var path=require('path');
const bodyParser=require('body-parser');
var exSession 	= require('express-session');

var home=require('./Controller/Home');
var login=require('./Controller/Login');
var logout=require('./Controller/Logout');
var registration=require('./Controller/Registration');
//----admin
var home=require('./Controller/AdminController/Home');
var uReport=require('./Controller/AdminController/UserReport');
var pReport=require('./Controller/AdminController/ProductReport');
var account=require('./Controller/AdminController/MyAccount');
var sellRequest=require('./Controller/AdminController/sellRequest');
//----manager
var _home=require('./Controller/ManagerController/Home');
var _transaction=require('./Controller/ManagerController/transaction');
var _pReport=require('./Controller/ManagerController/ProductReport');
var _uReport=require('./Controller/ManagerController/UserReport');
var _buyRequest=require('./Controller/ManagerController/buyRequest');
var _account=require('./Controller/ManagerController/MyAccount');
var _sellRequest=require('./Controller/ManagerController/sellRequest');
var _transaction=require('./Controller/ManagerController/transaction');

//configure app
app.set('view engine','ejs');
//app.set('views',path.join(__dirname,'views'));

// use middleware
// app.use(bodyParser());
// app.use('/abc', express.static('assets'));
// app.use('/link', express.static('bower_components'));
app.use(express.static(path.join(__dirname,'bower_components')));
app.use(bodyParser.urlencoded({extended: false}));
app.use(exSession({secret: 'Buy_From_Ali', saveUninitialized: true, resave: false}));


//router
//app.use(require('./model'));
app.use('/',home);
app.use('/home',home);
app.use('/login',login);
app.use('/logout',logout);
app.use('/Registration',registration);

// ------- adminpanel
app.use('/Home',home);
app.use('/uReport',uReport);
app.use('/pReport',pReport);
app.use('/Account',account);
app.use('/SellRequest',sellRequest);
// ------ manager panel
 app.use('/_Home',_home);
 app.use('/_Account',_account);
 app.use('/_uReport',_uReport);
 app.use('/_pReport',_pReport);
 app.use('/_BuyRequest',_buyRequest);
 app.use('/_SellRequest',_sellRequest);
 app.use('/_transaction',_transaction);
// app.use('/transaction',transaction);

//server start
var port=process.env.PORT || 3333;
app.listen(port,function(){
  console.log('port is open in 3333');
})
