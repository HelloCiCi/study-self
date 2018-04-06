<template>
  <div class="picture">
   <Common-header title = "Photo" bgcolor = "rgb(63, 81, 181)" nav= "<"></Common-header>
   <ul class = "photo-list">
     <li v-for = "(photo,index) in photoData" :key = "index">
       <router-link to = "/picture/PictureDetail"><img :src="photo.src" alt= ""></router-link>
     </li>
   </ul>
   <common-footer bgcolor = "rgb(63, 81, 181)"></common-footer>
  </div>
</template>

<script>
import CommonHeader from "../../components/common/CommonHeader";
import CommonFooter from "../../components/common/CommonFooter";
import {mapState,mapActions} from 'vuex';
import Axios from "axios";
export default {
  data () {
    return {
    //  photoData:[]
    }
  },
  computed:mapState(["photoData"]),
  methods:{
    ...mapActions(['setData'])
  },
  mounted(){
    Axios.get("../../../static/photo-data.json").then((res)=>{
      this.setData(res.data.photoData)
    })
  },
  components:{
    CommonHeader,
    CommonFooter
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .photo-list{
   overflow: hidden;
   margin: 1rem 0;
 }

 .photo-list li img{
   width: 50%;
   float: left;
 }
</style>
