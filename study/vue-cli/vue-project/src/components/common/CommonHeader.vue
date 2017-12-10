<template>
  <div class="header" :style = "{background:bgcolor}">
    <slot>
      <button @click = "back">{{nav}}</button>
   </slot>
   <h2>{{title}}</h2>
  </div>
</template>

<script>
export default {
  props:['title','bgcolor','nav'],
  data () {
    return {
      
    }
  },
  methods:{
    back(){
      history.go(-1);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.header{
  height: 1rem;
  background: rgb(33, 150, 243);
  display:flex;
  color: white;
  position: fixed;
    top: 0px;
    width: 100%;
}

.header button{
  height: 1rem;
  width: 1rem;
  font-weight: bold;
  font-size: 0.3rem;
  color: white;
}

.header h2{  
  font-weight: normal;
  font-size: 30px;
  text-align:center;
  line-height: 1rem;
  text-indent: -1rem;
  flex:1;
}

</style>
