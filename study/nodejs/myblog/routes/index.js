var express = require('express');
var user = require('../controllers/user');
var router = express.Router();

/* GET home page. */
router.get('/login', user.login);

router.get('/reg', user.reg);

router.get('/register',user.register);

router.post('/login',user.checklogin);

router.get('/',user.index);

module.exports = router;

//router.post('/login',function(req,res){
//  var username = req.body.username;
//  var pwd = req.body.pwd1;
//  if(username == 'lisi' && pwd == '1234'){
//
//      res.render('index',{
//        name:username
//      });
//  }
//});



//router.get('/reg', function(req, res) {
//  res.render('register');
//});
//
//router.get('/register',function(req,res){
//  var username = req.query.name;
//  var pwd1 = req.query.pwd1;
//  var pwd2 = req.query.pwd2;
//
//  if(pwd1 != pwd2){
//    res.send('pwd-error');
//  }else{
//    res.send('success');
//  }
//});
