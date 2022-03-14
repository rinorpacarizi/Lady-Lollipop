const state = () => ({
  list: [],
});
const mutations = {
  SET_LIST(state, list) {
    state.list = list;
  },
};
const actions = {
  fetchDrinks({ commit }, list) {
    commit("SET_LIST", list);
  },
};
const getters = {
  drinksList(state) {
    return state.list;
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
