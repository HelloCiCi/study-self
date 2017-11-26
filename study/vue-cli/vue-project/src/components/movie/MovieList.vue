<template>
  <div class="Top250">
    <div class= "img">
      <img src="../../assets/logo.png">
    </div>
   <div class = "intru">
     <span>{{title}}</span>
     <p>
       <span>{{des}}</span>
       ({{year}}) ({{sor}})
     </p>
   </div>
  </div>
</template>

<script>
export default {
  props:['title','des','year','sor'],
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
  .img{
      float: left;
      width: 1rem;
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
