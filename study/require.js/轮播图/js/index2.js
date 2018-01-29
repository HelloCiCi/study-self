/**
 * Created by GYX on 18/1/29.
 */
requirejs.config({
    paths:{
        jquery:'jquery-1.11.2'
    }
});
require(['jquery','carousel'],function($,Carousel){
    var img1 = ['img/1.jpg','img/2.jpg','img/3.jpg','img/4.jpg'];
    var setting1 = {
        selector:"#container",
        speed:500,
        imgArr:img1,
        buttonStyle : "square",
        arrowsPos : "bottom"
    };
    var carousel1 = new Carousel(setting1);
    carousel1.into();
});