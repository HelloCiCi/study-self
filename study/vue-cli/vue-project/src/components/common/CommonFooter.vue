<template>
  <div class="footer" :style = "{background:bgcolor}">
   <ul>
     <li><router-link to= '/movie'>电影</router-link></li>
     <li><router-link to= '/music'>音乐</router-link></li>
     <li><router-link to= '/book'>书籍</router-link></li>
     <li><router-link to= '/pic'>图片</router-link></li>
   </ul>
  </div>
</template>

<script>
export default {
  props:['bgcolor'],
  data () {
    return {
     
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .footer{
    height: 1rem;
    background: rgb(33, 150, 243);
    position: fixed;
    bottom: 0px;
    width: 100%;
  }

  .footer ul{
    display: flex;
  }

  .footer li{
    font-weight: 700;
    font-size: 0.3rem;
    text-align: center;
    line-height: 1rem;
    color: white;
    flex:1;
  }
  .footer li a{
    color: #ccc;
    outline: none;
  }
  .footer li a.router-link-active{
    color: #fff;
  }
</style>
