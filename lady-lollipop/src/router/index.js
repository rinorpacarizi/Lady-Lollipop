import Vue from 'vue'
import VueRouter from 'vue-router'
import Homepage from '../components/Homepage';
import CakePage from '../components/Cakes/CakePage';
import DrinkPage from '../components/Drinks/DrinkPage';
import SweetPage from '../components/Sweets/SweetPage';


Vue.use(VueRouter)

const routes = [
    {
      path: '/',
      name:"Home",
      component: Homepage
    },
    {
      path: '/sweets',
      name:"Sweets",
      component: SweetPage
    },
    {
      path: '/cakes',
      name:"Cakes",
      component: CakePage
    },
    {
      path: '/drinks',
      name:"Drinks",
      component: DrinkPage
    },

  ]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
