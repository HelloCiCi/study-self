<template>
  <div class="music">
   <Common-header title = "Music" bgcolor = "rgb(0, 150, 136)"></Common-header>
   <common-footer bgcolor = "rgb(0, 150, 136)"></common-footer>
  </div>
</template>

<script>
import CommonHeader from "../../components/common/CommonHeader";
import CommonFooter from "../../components/common/CommonFooter";
export default {
  data () {
    return {
     
    }
  },
  components:{
    CommonHeader,
    CommonFooter
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
</style>
