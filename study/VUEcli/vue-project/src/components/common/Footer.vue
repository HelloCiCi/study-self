<template>
  <div class = "footer" :style = "{background:footerColor}">
    <p class = "four"><router-link to = "/">电影</router-link></p>
    <p class = "four"><router-link to = "/music">音乐</router-link></p>
    <p class = "four"><router-link to  = "/book">书籍</router-link></p>
    <p class = "four"><router-link to = "/picture">图片</router-link></p>
  </div>
</template>

<script>
export default {
  props:['footerColor'],
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
    /* background: pink; */
    font-size: 0.3rem;
    position: fixed;
    bottom:0;
  }
  .four{
    flex:1;
    float: left;
  }

  .four a{
    color:#ccc;
  }

  .four a.router-link-active{
    color:#fff;
  }
</style>
