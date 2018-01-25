/**
 * Created by GYX on 18/1/21.
 */
var userModel = require('../models/userModel');
var blogModel = require('../models/blogModel');

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

    var fn = function(results){
        res.send(results);
    };

    userModel.register(username,pwd1,fn);
};

exports.index = function(req,res){
    blogModel.getBlogs(function(blogs){
        if(blogs.length>0){
            blogModel.getTypes(function(types){
                res.render('index',{
                    username:req.session.loginUser.username,
                    blogs:blogs,
                    types:types
                });
            });
        }
    })
};



exports.checklogin = function(req,res){
    var username = req.body.username;
    var pwd = req.body.pwd1;

    userModel.getUserByNameAndPwd(username,pwd,function(results){
        if(results.length > 0){
            req.session.loginUser = results[0];
            res.redirect('/');
        }else{
            res.redirect('/login');
        }
    });
};