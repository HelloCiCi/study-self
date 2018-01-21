/**
 * Created by GYX on 18/1/21.
 */
var userModel = require('../models/userModel');

exports.login =function(req,res){
    res.render('login');
};
exports.reg =function(req,res){
    res.render('register');
};
exports.register = function(req,res){
    var username = req.query.name;
    var pwd1 = req.query.pwd1;
    var pwd2 = req.query.pwd2;

    //if(pwd1 != pwd2){
    //    res.send('pwd-error');
    //}else{
    //    res.send('success');
    //}

    var fn = function(results){
        res.send(results);
    };

    userModel.register(username,pwd1,fn);
};