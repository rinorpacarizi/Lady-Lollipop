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
      <p class="p-SignUp">Sign Up in Lady Lollipop</p>
      <label class="labels">Name</label>
      <input class="inputs" v-model="name" type="text" />
      <label class="labels">Email address:</label>
      <input class="inputs" v-model="email" type="text" />
      <label class="labels">Password:</label>
      <input class="inputs" v-model="password" type="password" />
      <div class="error" v-show="error">{{this.errorMsg}}</div>
      <button class="button" @click.prevent="register" type="submit">Sign Up</button>
      <p class="p-signup">
        Already a memeber?
        <router-link class="a-in-p" :to="{ name: 'Login' }"
          >Sign In</router-link
        >
      </p>
    </form>
  </div>
</template>
<script>
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import db from "../../firebase/firebaseInit";
export default {
  name: "Register",
  data() {
    return {
      name: "",
      email: "",
      password: "",
      error:null,
      errorMsg:""
    };
  },
  methods: {
    async register() {
      if (this.name !== "" && this.email !== "" && this.password !== "") { 
        this.error=false;
        this.errorMsg="";
        const firebaseAuth=await firebase.auth();
        const createUser=await firebaseAuth.createUserWithEmailAndPassword(this.email,this.password);
        const results=await createUser;
        const database=db.collection("users").doc(results.user.uid);
        await database.set({
          name:this.name,
          email:this.email,
          password:this.password
      
        });
        this.$router.push({name:"Home"})
        return;
      }
      this.error=true;
      this.errorMsg="Please fill out all the fields"
      return;
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
  top: 216px;
  background-color: white;
  height: 481px;
  width: 441px;
  left: 39%;
  display: flex;
  flex-direction: column;
}
.p-SignUp {
  color: #fd4b4b;
  font-family: GrandHotel;
  font-size: 33px;
  padding-left: 18px;
  margin-bottom: 15px;
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
  height: 35px;
  margin-left: 45px;
  border: 1px #fd4b4b8f solid;
}
.inputs:focus {
  border: 1px #fd4b4bd7 solid;
  color: black;
  font-weight: 400;
  outline: #fd4b4b;
}

.button {
  height: 40px;
  width: 135px;
  position: relative;
  left: 34%;
  top: 23px;
  color: white;
  background-color: #fd4b4b;
  outline: none;
  border: 1px #fd4b4b solid;
  font-size: 22px;
  font-family: Galdeano;
  border-radius: 6px;
}
.button:hover{
  cursor: pointer;
}
.p-signup {
  padding-top: 14px;
  color: red;
  font-family: GrandHotel;
  font-size: 25px;
  padding-left: 14px;
}
.a-in-p {
  color: #fd4b4b;
  font-weight: 500;
}
.error{
  text-align: center;
  font-size: 12px;
  color: red;
}
</style>