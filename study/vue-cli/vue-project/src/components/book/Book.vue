<template>
  <div class="book">
   <Common-header title = "Book" bgcolor = "rgb(120, 85, 72)"></Common-header>
   <common-footer bgcolor = "rgb(120, 85, 72)"></common-footer>
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
