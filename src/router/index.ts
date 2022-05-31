import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FavoriteJoke from '../views/Favorites.vue'
import NotFound from '../views/NotFound.vue'


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/favorites',
    name: 'favorites',
    component: FavoriteJoke
  },

//catchAll 404
{
  path: '/:catchAll(.*)',
  name: 'NotFound',
  component: NotFound
}


]




const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
