<template>
  <div class="header">
    <Common-header title = "Movie" bgcolor = "rgb(33, 150, 243)" nav = "首页">
      <button>首页</button>
    </Common-header>
    <Movie-nav></Movie-nav>
   <router-view></router-view> 
    <Common-footer bgcolor = "rgb(33, 150, 243)"></Common-footer>
  </div>
</template>

<script>
import CommonHeader from "../../components/common/CommonHeader";
import CommonFooter from "../../components/common/CommonFooter";
import MovieNav from "./MovieNav";
import MovieList from "./MovieList";
import Axios from 'axios'
export default {
  data () {
    return {    
    }
  },
  
  components:  {
      CommonHeader,
      MovieNav,
      CommonFooter
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
