import Vue from 'vue'
import Router from 'vue-router'
import Movie from '@/components/movie/Movie'
import Music from '@/components/music/Music'
import Book from '@/components/book/Book'
import Picture from '@/components/picture/Picture'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Movie',
      component: Movie
    },
    {
      path:'/music',
      component: Music
    },
    {
      path:'/book',
      component: Book
    },
    {
      path:'/picture',
      component: Picture
    }
  ]
})
