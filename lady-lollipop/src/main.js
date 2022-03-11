import Vue from 'vue';
import App from './App.vue';
import '../src/element'
import router from './router';
import store from './store';
import './firebase/firebaseInit'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faPencil, faTrashCan, faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import "../src/assets/drinks.css"


Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
library.add(faPencil,faTrashCan, faCirclePlus)

Vue.config.productionTip = false
Vue.component('font-awesome-icon', FontAwesomeIcon)

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
