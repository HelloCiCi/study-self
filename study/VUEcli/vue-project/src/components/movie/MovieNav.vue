<template>
  <div class = "nav">
    <div class = "nav-three"><router-link to = "/movie/Top250">TOP250</router-link></div>
    <div class = "nav-three"><router-link to = "/movie/Hot250">正在热映</router-link></div>
    <div class = "nav-three"><router-link to = "/movie/CommingSoon">即将上映</router-link></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav{
    display:flex;
    background:pink;
    position: fixed;
    top:1rem;
    height: 1rem;
    width:100%;
    color:#fff;
}


  .nav .nav-three{
      text-align: center;  
      line-height: 1rem;
    float:left;
    flex:1;
    font-size: 0.3rem;
    }
</style>
