<template>
      <ul class = "Top250">
          <li class = "top-li">
            <img src = "../../assets/img/loading.gif" class = "movie-img">
            <div class = "movie-detail">
                <p class = "movie-name">无问西东</p>
                <span>喜剧，动作，爱情</span>
                (平均分<span>9.5</span>分)
            </div>
          </li>
      </ul>
</template>

<script>
export default {
  data () {
    return {
      movieList:[]
    }
  }
//   mounted:function(){
//       Axios.get("http://m.maoyan.com/movie/list.json?type=hot&offset=").then((res)=>{
//           this.movieList = res.data.
//           console.log(res);
//       });
//   }  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .Top250{
      position:fixed;
      top:12rem;
      width:100%;
  }
  .movie-img{
      height: 5rem;
      margin: 0.75rem 2rem;
      float: left;
      flex:1;
  }
  .movie-detail{
      float: left;
      font-size:1.5rem;
      height: 5rem;
      margin-top:0.8rem;
      border-bottom:solid 1px #ccc;
      flex:5;
      width: 100%;
      background: pink;
  }

  .top-li{
      display: flex;
      height: 7rem;
      width: 100%;
      background: orange;
  }
</style>
