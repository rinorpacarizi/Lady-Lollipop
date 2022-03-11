import Vue from 'vue';
import App from './App.vue';
import '../src/element'
import router from './router';
import store from './store';
import './firebase/firebaseInit'
Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
