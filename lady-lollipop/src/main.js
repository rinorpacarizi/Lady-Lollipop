import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

Vue.config.productionTip = false

let app;
firebase.auth().onAuthStateChanged(()=>{
  if(!app){
    new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
    
  }
});
