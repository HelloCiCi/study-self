import Vue from 'vue'
import Router from 'vue-router'
import Movie from '@/components/movie/Movie'
import MovieNav from '@/components/movie/MovieNav'
import Music from '@/components/music/Music'
import Book from '@/components/book/Book'
import Picture from '@/components/picture/Picture'
import Top250 from '@/components/movie/Top250'
import MusicImg from '@/components/music/MusicImg'
import MusicPlayer from '@/components/music/MusicPlayer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/movie/Top250'
    },
    {
      path:'/movie',
      component:Movie,
      redirect:'/movie/Top250',
      children:[
        {path:'/movie/Top250',component:Top250},
        {path:'/movie/hot',component:Top250},
        {path:'/movie/coming',component:Top250}
      ]
    },
    {
      path:'/music',
      redirect:'/music/musicImg',
      component:Music,
      children:[
        {path:'/music/musicImg',component:MusicImg},
        {path:'/music/musicPlayer/:id',component:MusicPlayer}
      ]
    },
    {
      path:'/book',
      component:Book
    },
    {
      path:'/pic',
      component:Picture
    },
    {
      path:'Top250',
      component:Top250
    }

  ]
})
