/**
 * Created by GYX on 18/1/22.
 */
var db = require('./db');
exports.getBlogs = function(callback){
    var sql = `select * from t_article`;
    db.query(sql,callback);
};
exports.getTypes = function(callback){
    var sql = `select * from t_article_type`;
    db.query(sql,callback);
};