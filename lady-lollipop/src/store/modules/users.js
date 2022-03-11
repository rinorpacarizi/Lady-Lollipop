const state = () => ({
  user: {
    data:null
  },
});
const mutations = {
  setUserData(state,data){
    state.user.data=data;
  }
};
const actions = {
  setUser({commit},user){
    commit("setUserData",user);
  }
};
const getters={
  user(state){
    return state.user;
  }
};
export default {
  state,
  mutations,
  actions,
  getters
};
