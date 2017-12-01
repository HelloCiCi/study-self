<template>
  <div class="Top250">
    <div class= "img">
      <img :src = "img">
    </div>
   <div class = "intru">
     <span>{{title}}</span>
     <p>
       <span>{{des}}</span>
       (平均{{sor}}分)
     </p>
   </div>
  </div>
</template>

<script>
export default {
  props:['title','des','sor','img'],
  data () {
    return {
     
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .Top250{
    height: 1rem;
    padding: 10px 10px 0px 10px;
  }
  .img img{
      float: left;
      width: 0.8rem;
      height: 0.9rem;
      vertical-align: bottom;
      
  }

  .intru{
    float: left;
    font-size: 0.2rem;
    width: 4rem;
    margin-left: 0.6rem;
    border-bottom: 1px solid #ccc;
  }
</style>
