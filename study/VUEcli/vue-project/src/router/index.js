import Vue from 'vue'
import Router from 'vue-router'
import Movie from '@/components/movie/Movie'
import Music from '@/components/music/Music'
import Book from '@/components/book/Book'
import Picture from '@/components/picture/Picture'
import Top250 from '@/components/movie/Top250'
import MusicPlayer from '@/components/music/MusicPlayer'
import MusicStyle from '@/components/music/MusicStyle'
import ComponentA from '@/components/ComponentA'
import PictureDetail from '@/components/picture/PictureDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      // component: ComponentA
      redirect:'/movie/Top250'
    },
    {
      path: '/movie',
      redirect:'/movie/Top250',
      component: Movie,
      children:[
        {path:'/movie/Top250',component:Top250},
        {path:'/movie/Hot250',component:Top250},
        {path:'/movie/Commingsoon',component:Top250},
      ]
    },
    {
      path:'/music',
      component: Music,
      redirect:'/music/MusicStyle',
      children:[
        {path:"/music/MusicStyle",component:MusicStyle},
        {path:"/music/MusicPlayer",component:MusicPlayer}
      ]
    },
    {
      path:'/book',
      component: Book
    },
    {
      path:'/picture',
      component: Picture
    }
    // {
    //   path:'/picture_detail/:index',
    //   component: PictureDetail
    // }
  ]
})
