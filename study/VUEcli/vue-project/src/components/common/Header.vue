<template>
  <div class = "header" :style = "{background:bgcolor}">
    <slot>
      <p @click = "backit">{{back}}</p>
    </slot>
    <h1>{{title}}</h1>
  </div>
</template>

<script>
export default {
  props:['title','bgcolor','back'],
  data () {
    return {
      
    }
  },
  methods:{
    backit(){
      this.$router.go(-1);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.body{
  position: relative;
}
.header{
  position: fixed;
  top:0;
  height: 1rem;
  line-height: 1rem;
  text-align: center;
  width: 100%;
  display: flex;
  /* background: pink; */
  color:#fff;

  
}
  p{
    flex:1;
    float: left;
  }
  h1{
    flex: 9;
    text-align: center;
    text-indent: -0.8rem;
  }
</style>
