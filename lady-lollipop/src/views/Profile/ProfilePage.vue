<template>
  <div style="height:34rem;">
    <p class="account-p">Account Settings</p>

    <form class="form">
      <p class="initials">{{ $store.state.users.profileInitials }}</p>

      <p class="role">Role</p>
      <label class="label" for="firstName">First Name:</label>
      <input class="input" type="text" id="firstName" v-model="firstName" />
      <label class="label" for="lastName">Last Name:</label>
      <input class="input" type="text" id="lastName" v-model="lastName" />
      <label class="label" for="username">Username:</label>
      <input class="input-u" type="text" id="username" v-model="username" />
      <label class="label" for="email">Email:</label>
      <input disabled class="input-d" type="text" id="email" v-model="email" />
      <button class="save" @click="updateProfile">Save Changes</button>
    </form>
  </div>
</template>
<script>
export default {
  name: "ProfilePage",
  data() {
    return {};
  },
  computed: {
    firstName: {
      get() {
        return this.$store.state.users.profileFirstName;
      },
      set(payload) {
        this.$store.commit("changeFirstName", payload);
      },
    },
    lastName: {
      get() {
        return this.$store.state.users.profileLastName;
      },
      set(payload) {
        this.$store.commit("changeLastName", payload);
      },
    },
    username: {
      get() {
        return this.$store.state.users.profileUsername;
      },
      set(payload) {
        this.$store.commit("changeUsername", payload);
      },
    },
    email() {
      return this.$store.state.users.profileEmail;
    },
  },
  methods:{
      updateProfile(){
          this.$store.dispatch("updateUserSettings");
      }
  }
};
</script>
<style scoped>
@font-face {
  font-family: GrandHotel;
  src: url(../../assets/Fonts/GrandHotel-Regular.ttf);
}
@font-face {
  font-family: Galdeano;
  src: url(../../assets/Fonts/Galdeano-Regular.ttf);
}
.account-p {
  font-size: 40px;
  font-family: Galdeano;
  position: relative;
  bottom: 90px;
}
.initials {
  width: 62px;
  height: 43px;
  background-color: black;
  border-radius: 69px;
  left: 38%;
  position: relative;
  padding: 32px 17px 20px 20px;
  color: white;
  font-size: 30px;
  top: 18px;
}
.form {
  left: 17%;
  position: relative;
  display: flex;
  flex-direction: column;
  bottom: 9rem;
  width: 25rem;
}
.label {
  font-size: 25px;
  text-align: left;
  color: #ea2626;
  margin-bottom: 3px;
  font-family: Galdeano;
}
.input {
  height: 30px;
  border: 1px black solid;
  border-radius: 5px;
  margin-bottom: 6px;
  font-size: 18px;
  padding-left: 7px;
}
.input-u {
  height: 30px;
  border: 1px black solid;
  border-radius: 5px;
  margin-bottom: 20px;
  font-size: 18px;
  padding-left: 7px;
}
.input-d {
  height: 30px;
  border: 1px black solid;
  border-radius: 5px;
  margin-bottom: 6px;
  font-size: 18px;
  padding-left: 7px;
  color: #929090;
  background-color: white;
}
.role {
  border-radius: 8px;
  background-color: #8b0000;
  height: 30px;
  width: 92px;
  font-size: 20px;
  color: white;
  position: relative;
  left: 39%;
  bottom: 20px;
  padding-top: 6px;
}
.save {
  height: 48px;
  width: 190px;
  background-color: darkcyan;
  border-radius: 22px;
  outline: none;
  border: none;
  position: relative;
  left: 27%;
  top: 2rem;
  color: white;
  font-size: 18px;
}
.save:hover{
    background-color: rgb(35, 175, 175);
}
</style>