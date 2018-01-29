/**
 * Created by GYX on 18/1/29.
 */
requirejs.config({
    paths : {
        jquery: "jquery-1.11.2"
    }
});
define(['jquery'],function($){
    function Carousel(setting){
        this.defaultsettings = {
            selector:"#container",
            speed:300,
            imgArr:[],
            buttonStyle : "square",
            arrowsPos : "bottom"
        };

        $.extend(this.defaultsettings,setting);

        this.$container = $('<div class="carousel-container"></div>');
        this.$imgs = $('<div class="carousel-imgs"></div>');
        this.$nav = $('<ul class="carousel-nav"></ul>');
        this.$arrows = $('<div class="carousel-arrows"></div>');
        this.$left = $('<div class="carousel-left">&lt;</div>');
        this.$right = $('<div class="carousel-right">&gt;</div>');
    }


    Carousel.prototype.into = function(){
        this.nowIndex = 0;
        this.$container.append(this.$imgs).append(this.$nav).append(this.$arrows);
        this.$arrows.append(this.$left).append(this.$right);
        for(var i = 0;i < this.defaultsettings.imgArr.length;i++){
            this.$imgs.append("<img src = " + this.defaultsettings.imgArr[i] + ">");
            this.$nav.append("<li>"+ (i+1) + "</li>");
        }
        $("img", this.$imgs).eq(0).addClass("selected");
        $("li", this.$nav).eq(0).addClass("selected");

        this.$left.addClass(this.defaultsettings.arrowsPos);
        this.$right.addClass(this.defaultsettings.arrowsPos);
        $(this.defaultsettings.selector).append(this.$container);

        this.$left.on("click",function(){
            this.nowIndex--;
            if(this.nowIndex == -1){
                this.nowIndex = this.defaultsettings.imgArr.length -1;
            }
            changeImg.call(this);
        }.bind(this));
        this.$right.on("click",function(){
            this.nowIndex++;
            if(this.nowIndex == this.defaultsettings.imgArr.length){
                this.nowIndex = 0;
            }
            changeImg.call(this);
        }.bind(this));

        this.$container.hover(function(){
            clearInterval(this.timer);
        }.bind(this), function(){
            play.call(this);
        }.bind(this));

        play.call(this);

        function play(){
            this.timer = setInterval(function(){
                this.$right.trigger("click");
            }.bind(this), this.defaultsettings.speed);
        }
        //function play(){
        //    this.timer = setInterval(function(){
        //        $("li", this.$nav).eq(this.nowIndex).addClass("selected").siblings().removeClass("selected");
        //        $("img", this.$imgs).eq(this.nowIndex).addClass("selected").siblings().removeClass("selected");
        //    },500);
        //}


        function changeImg(){
            $("li", this.$nav).eq(this.nowIndex).addClass("selected").siblings().removeClass("selected");
            $("img", this.$imgs).eq(this.nowIndex).addClass("selected").siblings().removeClass("selected");
        }
    };
    return Carousel;
});