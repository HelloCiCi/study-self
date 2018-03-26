<template>
      <ul class = "Top250">
          <li class = "top-li">
            <img :src = "kkimg" class = "movie-img">
            <div class = "movie-detail">
                <p class = "movie-name">{{kknm}}</p>
                <span>{{kkcat}}</span>
                <span>{{kkrt}}</span>
            </div>
          </li>
      </ul>
</template>

<script>
export default {
    props:['kkimg','kkcat','kknm','kkrt'],
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .Top250{
      width:100%;
      /* margin:0.4rem 0rem; */
  }
  .movie-img{
      height: 1rem;
      margin: 0.1rem 0.2rem;
      float: left;
      flex:1;
  }
  .movie-detail{
      float: left;
      font-size:0.3rem;
      height: 1rem;
      margin-top:0.1rem;
      border-bottom:solid 1px #ccc;
      flex:5;
      width: 100%;
      /* background: pink; */
  }

  .top-li{
      display: flex;
      height: 1.2rem;
      width: 100%;
      /* background: orange; */
  }
</style>
