<template>
  <div class = "footer">
    <p class = "four">电影</p>
    <p class = "four">音乐</p>
    <p class = "four">书籍</p>
    <p class = "four">图片</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .footer{
    display: flex;
    height: 1rem;
    width:100%;
    line-height: 1rem;
    text-align: center;
    background: pink;
    color:#fff;
    font-size: 0.3rem;
    position: fixed;
    bottom:0;
  }
  .four{
    flex:1;
    float: left;
  }
</style>
