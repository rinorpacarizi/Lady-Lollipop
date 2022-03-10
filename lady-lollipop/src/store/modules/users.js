import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import db from "../../firebase/firebaseInit";

const state = () => ({
  user: null,
  profileFirstName: null,
  profileLastName: null,
  profileUsername: null,
  profileEmail: null,
  profileId: null,
  profileInitials: null,
});
const mutations = {
  updateUser(state, payload) {
    state.user = payload;
  },
  setProfileInfo(state, doc) {
    state.profileId = doc.id;
    state.profileEmail = doc.data().email;
    state.profileFirstName = doc.data().firstName;
    state.profileLastName = doc.data().lastName;
    state.profileUsername = doc.data().username;
    
  },
  setProfileInitials(state) {
    state.profileInitials =
      state.profileFirstName.match(/(\b\S)?/g).join("") +
      state.profileLastName.match(/(\b\S)?/g).join("");
  },
};
const actions = {
  async getCurrentUser({ commit }) {
    const database = await db
      .collection("users")
      .doc(firebase.auth().currentUser.uid);
    const dbResults = await database.get();
    commit("setProfileInfo", dbResults);
    commit("setProfileInitials");

  },
};
const getters = {};

export default {
  state,
  mutations,
  actions,
  getters,
};
