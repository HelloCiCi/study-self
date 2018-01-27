/**
 * Created by GYX on 18/1/26.
 */
requirejs.config({
    paths:{
        jquery:"jquery-1.11.2"
    }
});
require(["jquery","dialog"],function($,dialog){
    $(".btn").on('click',function(){
        var currentsettings = {
            title: "你好",
            height: "500px",
            width:"200px",
            content:"你是不是傻"
        };
        dialog.open(currentsettings);
    });

});