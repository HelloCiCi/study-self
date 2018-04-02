<template>
<div>
  <Header title = 'Movie' bgcolor = "pink" back = "首页">
    <p>首页</p>
  </Header>
  <Movie-nav></Movie-nav>
  <router-view></router-view> 
  <Footer footerColor = "pink"></Footer>  
</div>
</template>

<script>
import Header from '../../components/common/Header'
import Footer from '../../components/common/Footer'
import MovieNav from './MovieNav'
import MovieList from './MovieLi';

export default {
  data () {
    return {
      
    }
  },
  components:{
      Header,
      Footer,
      MovieNav,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
</style>

