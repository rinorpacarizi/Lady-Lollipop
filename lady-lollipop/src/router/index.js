import Vue from "vue";
import VueRouter from "vue-router";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import Homepage from "../components/Homepage";
import CakePage from "../views/Cakes/CakePage";
import DrinkPage from "../views/Drinks/DrinkPage";
import SweetPage from "../views/Sweets/SweetPage";
import Login from "../views/Profile/Login";
import Register from "../views/Profile/Register";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Homepage,
    meta: {
      title: "Home",
    },
  },
  {
    path: "/sweets",
    name: "Sweets",
    component: SweetPage,
    meta: {
      title: "Sweets",
      isAuthenticated: true,
    },
  },
  {
    path: "/cakes",
    name: "Cakes",
    component: CakePage,
    meta: {
      title: "Cakes",
      isAuthenticated: true,
    },
  },
  {
    path: "/drinks",
    name: "Drinks",
    component: DrinkPage,
    meta: {
      title: "Drinks",
      isAuthenticated: true,
    },
  },

  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: {
      title: "Login",
    },
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
    meta: {
      title: "Register",
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} | Lady Lollipop`;

  onAuthStateChanged(getAuth(), (user) => {
    if (to.matched.some((record) => record.meta.isAuthenticated && !user)) {
      next("/login");
    }
  });

  next();
});

export default router;
