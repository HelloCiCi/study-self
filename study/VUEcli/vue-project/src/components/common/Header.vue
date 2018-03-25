<template>
  <div class = "header">
    <p>首页</p>
    <h1>Movie</h1>
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
.body{
  position: relative;
  font-size: 10px;
}
.header{
  position: fixed;
  height: 6rem;
  line-height: 6rem;
  text-align: center;
  width: 100%;
  display: flex;
  background: pink;
  color:#fff;

  
}
  p{
    flex:1;
    float: left;
  }
  h1{
    flex: 9;
    text-align: center;
    text-indent: -3rem;
  }
</style>
