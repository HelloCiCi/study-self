<template>
  <div class="header">
    <div class = "List">
      <Movie-list v-for = "(obj,index) in movielist" :key = "index" :title = "obj.nm" :img = "obj.img" :des = "obj.cat" :sor = "obj.sc"></Movie-list>
    </div>
    <div id="img" v-show = "show"><img src = "../../assets/img/loading.gif" alt = ""></div>
  </div>
</template>

<script>
import MovieList from "./MovieList";
import Axios from 'axios'
export default {
  data () {
    return {
      movielist:[],
      show:false     
    }
  },
  mounted(){
    var _this = this;
    window.onscroll = function(){
      let scrollTop = document.documentElement.scrollTop;
      let clientHeight = document.documentElement.clientHeight;
      let htmlHeight = document.documentElement.scrollHeight;

      if(scrollTop+clientHeight >= htmlHeight){
        _this.show = true;
         _this.loadingData();
      }
    }
    this.loadingData();
  },
  methods:{
    loadingData(){
      Axios.get(API_PROXY + "http://m.maoyan.com/movie/list.json?type=hot&offset="+ this.movielist.length +"&limit=10")
          .then((res)=>{
          this.movielist = this.movielist.concat(res.data.data.movies);
          this.show = false;
      });
    }
  },
  components:  {
      MovieList
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .List{
     margin-top: 2rem;
  }

  #img{
    text-align: center;
    margin:0.2rem 0 1.3rem 0;
    height: 0.5rem;
  }


</style>
