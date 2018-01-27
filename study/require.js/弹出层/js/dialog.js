/**
 * Created by GYX on 18/1/26.
 */

requirejs.config({
    paths:{
        jquery:"jquery-1.11.2"
    }
});
define(["jquery"],function($){
    return {
        open : function(currentsettings){
         var defaultsettings = {
            title:"啦啦啦啦啦啦阿拉啦啦啦啦",
            height: "400px",
            width:"300px",
             content:"呵呵"
        };

            $.extend(defaultsettings,currentsettings);

        var html =`<div class = "container">
                    <div class = "mask"></div>
                     <div class = "dialog">
                        <div class = "title">
                            <span class = "title-content">${defaultsettings.title}</span>
                            <span class = "close">[*]</span>
                        </div>
                        <div class = "content">${defaultsettings.content}</div>
                        </div>
                    </div>`;

            $(document.body).append(html);
            $(".dialog").css({
                height:defaultsettings.height,
                width:defaultsettings.width
            });
            $(".close").on("click",function(){
                $(this).parents(".dialog").remove();
            });
    }}
});
