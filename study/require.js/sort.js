/**
 * Created by GYX on 18/1/25.
 */
define(['isArray'],function(isArray){
    function sort(arr){
        if(isArray(arr)){
            return arr.sort(function(a,b){
                return a-b;
            });
        }else{
              return "传入的不是一个数组";
            }
    }
    return sort;
});
