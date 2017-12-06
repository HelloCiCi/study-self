<template>
  <div class="player">
    <a-player :music = "musicProp" :narrow = "false" theme = "#b7daff" :autoplay = "false" :showlrc = "3" :mutex = "true" listmaxheight = "550px" v-if = "isShow">

    </a-player>
   <!-- {{$route.params.id}} -->
  </div>
</template>
<script>
import Axios from 'axios';
import APlayer from 'vue-aplayer';
export default {
  data(){
    return{
      musicData:[],
      musicProp:[],
      isShow:false
    }
  },
  mounted(){
    Axios.get('/static/music-data.json').then((res)=>{
      this.musicData = res.data.musicData;
      console.log(res.data.musicData);
      for(var i = 0; i < this.musicData.length;i++){
          var obj = new Object();
            obj.title = this.musicData[i].title;
            obj.author = this.musicData[i].author;
            obj.url = this.musicData[i].src;
            obj.pic = this.musicData[i].musicImgSrc;
            obj.lrc = "/static/" + this.musicData[i].lrc;   
    this.musicProp.push(obj);               
    }
    this.isShow = true;
    });   
  },
  components:{
    APlayer
  }
}
</script>
<<style>
  .player{
    margin-top: 1rem;
  }
</style>


