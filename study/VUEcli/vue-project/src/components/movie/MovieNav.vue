<template>
  <div class = "nav">
    <div class = "nav-three">TOP250</div>
    <div class = "nav-three">正在热映</div>
    <div class = "nav-three">即将上映</div>
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
    top:6rem;
    height: 6rem;
    width:100%;
    color:#fff;
}


  .nav .nav-three{
      text-align: center;  
      line-height: 6rem;
    float:left;
    flex:1;
    font-size: 1.8rem;
    }
</style>
