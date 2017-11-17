/**
 * Created by GYX on 17/11/14.
 */
import css from './css/index.css';
import sass from './css/text.scss';
document.getElementById('div').innerHTML = "hello world111122";
let a = 10;
const b = 20;
//import $ from 'jquery';
//$("#aa").html("hhhhhh");)
let user = require("../user.json");
$("#aa").html(`名字叫${user.name}`);