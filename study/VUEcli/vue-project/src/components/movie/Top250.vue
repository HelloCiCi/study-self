<template>
<div>
        <div class = "movieList">
            <MovieLi v-for = "obj in movieList" :kkimg = 'obj.img' :kkcat = 'obj.cat' :kknm = 'obj.nm' :kkrt = 'obj.rt'></MovieLi>
        </div>
        <div class = "loading">
            <img src = "/static/img/loading.gif" v-show = "show">
        </div>
</div>
</template>

<script>
import MovieLi from './MovieLi'
import Axios from 'axios'

export default {
  data () {
    return {
      movieList:[],
      show: false
    }
  },
  mounted(){
    var that = this;
    window.onscroll = function(){
      var scrollTop = document.documentElement.scrollTop||document.body.scrollTop;
      var clientHeight = document.documentElement.clientHeight;
      var htmlHeight = document.documentElement.scrollHeight;

      if(scrollTop+clientHeight >= htmlHeight){
        that.show = true;
        that.loadingData();
      }
    };
    this.loadingData();
    
  },
  methods:{
    loadingData(){
      Axios.get(API_PROXY+"http://m.maoyan.com/movie/list.json?type=hot&offset="+this.movieList.length+"&limit=10").then((res)=>{
      // console.log(res.data.data.movies);
      this.movieList = this.movieList.concat(res.data.data.movies);
    });
    }
  },
  components:{
      MovieLi
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .movieList{
   margin-top:2rem;
    width:100%;
  }

  .loading{
    margin-bottom: 2rem;
  }
</style>
