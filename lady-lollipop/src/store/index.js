import Vue from 'vue';
import Vuex from 'vuex';
import sweets from './modules/sweets';

Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        sweets,
    }
})