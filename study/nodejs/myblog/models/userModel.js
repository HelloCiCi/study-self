/**
 * Created by GYX on 18/1/21.
 */
var db = require('./db');

exports.register = function(username,pwd1,callback){
    var sql = `insert into t_user(username,password) values('${username}','${pwd1}')`;
    db.query(sql,callback);
};

exports.getUserByNameAndPwd = function(username,pwd,callback){
    var sql = "select * from t_user where email='"+username+"' and password = '"+pwd+"'";
    db.query(sql,callback);
};


