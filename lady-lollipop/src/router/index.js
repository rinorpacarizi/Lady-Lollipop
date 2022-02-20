import Vue from 'vue'
import VueRouter from 'vue-router'
import Homepage from '../components/Homepage'

Vue.use(VueRouter)

const routes = [
    {
      path: '/',
      component: Homepage
    },
    
  ]
  
  const router = new VueRouter({
    routes
  })
  
  export default router
  