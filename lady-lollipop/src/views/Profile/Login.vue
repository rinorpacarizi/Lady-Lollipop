<template>
  <div>
    <img
      src="../../assets/Images/login_background.jpg"
      class="background-img"
    />
    <div>
      <router-link class="logo" :to="{ name: 'Home' }"
        ><img class="logo" src="../../assets/Images/logo.jpg"
      /></router-link>
    </div>

    <form class="form">
      <p class="p-SignIn">Sign in to Lady Lollipop</p>
      <label class="labels">Email address:</label>
      <input class="inputs" type="text" v-model="email" />
      <label class="labels">Password:</label>
      <input class="inputs" type="password" v-model="password" />
      <button class="button" @click.prevent="signIn" type="submit">
        Sign In
      </button>
      <div class="error" v-show="error">{{ this.errorMsg }}</div>
      <p class="p-signin">
        Not a memeber?
        <router-link class="a-in-p" :to="{ name: 'Register' }"
          >Sign Up</router-link
        >
      </p>
    </form>
  </div>
</template>
<script>
import { getAuth, signInWithEmailAndPassword } from "@firebase/auth";
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
      error: null,
      errorMsg: "",
    };
  },
  methods: {
    async signIn() {
      await signInWithEmailAndPassword(getAuth(), this.email, this.password);
      this.$router.replace({ name: "Sweets" });

    },
  },
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
body {
  margin: 0 auto;
}
.background-img {
  height: 47rem;
  width: 100%;
  margin-top: -60px;
  opacity: 0.6;
}
.logo {
  position: absolute;
  top: 28px;
    height: 133px;
    left: 48%;
}
.form {
  position: absolute;
    top: 232px;
    background-color: white;
    height: 420px;
    width: 441px;
    left: 39%;
    display: flex;
    flex-direction: column;
}
.p-SignIn {
  color: #fd4b4b;
  font-family: GrandHotel;
  font-size: 33px;
  padding-left: 18px;

}
.labels {
  color: #fd4b4b;
  font-family: Galdeano;
  font-size: 24px;
  text-align: left;
  padding: 8px 0px 8px 45px;
}
.inputs {
  width: 325px;
  height: 32px;
  margin-left: 45px;
  border:1px #fd4b4b8f solid;
}
.inputs:focus{
    border:1px #fd4b4bd7 solid;
    color:black;
    font-weight: 400;
    outline: #fd4b4b;
}

.button{
    height: 40px;
    width: 135px;
    position: relative;
    left: 34%;
    top: 35px;
    color: white;
    background-color: #fd4b4b;
    outline: none;
    border: 1px #fd4b4b solid;
    font-size: 22px;
    font-family: Galdeano;
    border-radius: 6px;
}
.p-signin{
    padding-top: 30px;
    color: red;
    font-family: GrandHotel;
    font-size: 23px;

}
.a-in-p{
  color: #fd4b4b;
  font-weight: 500;
}
.error {
  font-size: 20px;
  color: red;
  position: relative;
  bottom: 32px;
  width: 356px;
  left: 43px;
  text-decoration: underline;
  font-weight: bold;
  font-style: italic;
  font-family: Galdeano;
}
</style>