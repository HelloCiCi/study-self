/**
 * Created by GYX on 18/1/25.
 */
//define(function(){
//    function isArray(arr){
//        if(arr.constructor == Array && arr instanceof Array){
//            return true;
//        }else{
//            return false;
//        }
//    }
//    return isArray;
//});

define(function(){
    function isArray(arr){
        if(arr.constructor == Array && arr instanceof Array){
            return true;
        }
        return false;
    }
    return isArray;
});
