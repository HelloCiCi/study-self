<template>
  <div class="book">
   <Common-header title = "Book" bgcolor = "rgb(120, 85, 72)" nav= "<">
   </Common-header>
   <swipe class="my-swipe">
      <swipe-item class="item1"></swipe-item>
      <swipe-item class="item2"></swipe-item>
      <swipe-item class="item3"></swipe-item>
    </swipe>
   <common-footer bgcolor = "rgb(120, 85, 72)"></common-footer>
  </div>
</template>

<script>
import CommonHeader from "../../components/common/CommonHeader";
import CommonFooter from "../../components/common/CommonFooter";
import {Swipe, SwipeItem} from 'vue-swipe'
export default {
  data () {
    return {
     
    }
  },
  components:{
    CommonHeader,
    CommonFooter,
    Swipe,
    SwipeItem

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import '../../assets/css/vue-swipe.css';
 .my-swipe {
    height: 200px;
    font-size: 30px;
    text-align: center;
    margin-top: 1rem;
  }
  .my-swipe .mint-swipe-item{
    height: 100%;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
  }


  .item1{
    background: url('https://img3.doubanio.com/lpic/s27102925.jpg');
  }
  .item2{
    background: url('https://img3.doubanio.com/lpic/s6989253.jpg');
  }
  .item3{
    background: url('https://img3.doubanio.com/lpic/s24468373.jpg');
  }
</style>
