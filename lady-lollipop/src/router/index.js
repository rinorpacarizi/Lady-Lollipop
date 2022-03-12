import Vue from 'vue'
import VueRouter from 'vue-router'
import Homepage from '../components/Homepage';
import CakePage from '../views/Cakes/CakePage';
import DrinkPage from '../views/Drinks/DrinkPage';
import SweetPage from '../views/Sweets/SweetPage';
import Login from '../views/Profile/Login';
import Register from '../views/Profile/Register';
import AboutUs from '../views/AboutUs/AboutUs';



Vue.use(VueRouter)

const routes = [
    {
      path: '/',
      name:"Home",
      component: Homepage,
      meta:{
        title:"Home"
      }
    },
    {
      path: '/sweets',
      name:"Sweets",
      component: SweetPage,
      meta:{
        title:"Sweets"
      }
    },
    {
      path: '/cakes',
      name:"Cakes",
      component: CakePage,
      meta:{
        title:"Cakes"
      }
    },
    {
      path: '/drinks',
      name:"Drinks",
      component: DrinkPage,
      meta:{
        title:"Drinks"
      }
    },
    {
      path: '/aboutUs',
      name:"AboutUs",
      component: AboutUs,
      meta:{
        title:"AboutUs"
      }
    },
    {
      path: '/create-drink',
      name: 'Create-Drink',
      component: () => import('../components/CreateComponent')
    },
    {
      path: '/view-drinks',
      name: 'view-drinks',
      component: () => import('../components/ListComponent')
    }
    ,
    {
      path: '/edit-drink/:id',
      name: 'edit-drink',
      component: () => import('../components/EditComponent')
    },
    {
      path: '/login',
      name:"Login",
      component: Login,
      meta:{
        title:"Login"
      }
    },
    {
      path: '/register',
      name:"Register",
      component: Register,
      meta:{
        title:"Register"
      }
    },
   

  ]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to,from,next) => {
  document.title= `${to.meta.title} | Lady Lollipop`;
  next();
})

export default router
