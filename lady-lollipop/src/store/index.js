import Vue from "vue";
import Vuex from "vuex";
import sweets from "./modules/sweets";
import cakes from "./modules/cakes";
import drinks from "./modules/drinks";
import users from "./modules/users";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    sweets,
    cakes,
    drinks,
    users,
  },
});
