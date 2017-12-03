<template>
  <div class="nav">
   <ul>
     <li><router-link to = "/movie/Top250">Top250</router-link></li>
     <li><router-link to = "/movie/hot">正在热映</router-link></li>
     <li><router-link to = "/movie/coming">即将上映</router-link></li>
   </ul>
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
    height: 1rem;
    background: rgb(33, 150, 243);
    position: fixed;
    top: 1rem;
    font-size: 0.3rem;
    width: 100%;
  }

  .nav ul{
    display: flex;
  }

  .nav li{
    font-weight: 700;
    font-size: 0.3rem;
    text-align: center;
    line-height: 1rem;
    flex:1;
  }

  .nav li a{
    color: #ccc;    
  }

  .nav li a.router-link-active{
    color: #fff;
  } 
</style>
