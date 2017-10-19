/**
 * Created by GYX on 17/10/15.
 */

    var oNav = document.getElementById('nav');
    var aLi = document.getElementsByTagName('li');
    var aA = document.getElementsByTagName('a');





    window.onscroll = function(){
        oNav.className = 'scroll-nav';
        for(var i = 0; i < aA.length; i++){
            aLi[i].className = 'scroll-li';
            aA[i].className = 'scroll-a';
        }
    }