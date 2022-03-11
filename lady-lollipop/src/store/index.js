import Vue from 'vue';
import Vuex from 'vuex';
import sweets from './modules/sweets';
import sweets from './modules/cakes';
import sweets from './modules/drinks';

Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        sweets,
        cakes,
        drinks
    }
})