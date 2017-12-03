<template>
  <div class="music">
    <ul class = "musicImg">
      <li v-for = "(obj,index) in musiclist" :key = 'index'>
        <img :src = "obj.bg" alt="">
      </li>
    </ul>
  </div>
</template>

<script>
import Axios from "axios";
export default {
  data () {
    return {
     musiclist:[]
    }
  },
  mounted(){
    Axios.get('static/musiclist.json').then((res)=>{
      this.musiclist = res.data.albums;
    });
  },
  components:{
   
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .music{
    margin: 1rem 0;
  }

  .musicImg li{
    float: left;    
    width: 50%;
  }

  .musicImg li img{
    width: 100%;
    height: 100%;
  }

</style>
