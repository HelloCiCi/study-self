<template>
<div>
  <Header></Header>
  <movie-nav></movie-nav>
  <Top250></Top250>
  <Footer></Footer>  
</div>
</template>

<script>
import Header from '../../components/common/Header'
import Footer from '../../components/common/Footer'
import MovieNav from '../../components/movie/MovieNav'
import Top250 from '../../components/movie/Top250'
import Axios from 'axios'
export default {
  data () {
    return {
      
    }
  },
  mounted(){
    Axios.get(API_PROXY+"http://m.maoyan.com/movie/list.json?type=hot&offset=").then((res)=>{
      console.log(res);
    });
  },
  components:{
      Header,
      Footer,
      Top250,
      MovieNav
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
</style>
