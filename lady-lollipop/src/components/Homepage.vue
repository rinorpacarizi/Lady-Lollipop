<template>
  <div>
    <img src="../assets/Images/2.jpg" class="background-img" />
    <div class="home-div">
      <div class="navbar-b">
        <button class="b1">Home</button>
        <router-link class="b1" to="/Sweets" tag="button">Sweets</router-link>
        <!-- <button class="b1">Sweets</button> -->
        <router-link class="b1" to="/Cakes" tag="button">Cakes</router-link>
        <router-link class="b1" to="/Drinks" tag="button">Drinks</router-link>
      </div>

      <div>
        <img class="logo" src="../assets/Images/home-logo.png" />
      </div>
      <br />
      <div>
        <p>WELCOME TO<br />LADY<br />LOLLIPOP<br />SHOP</p>
        <br />
        <router-link :to="{ name: 'Register' }" class="b7"
          >Connect with us</router-link
        >
      </div>
    </div>
    <footer style="position: absolute; bottom: 12rem">
      <div style="position: relative; top: 12rem; left: 11px">
        <p class="footer-p">Copyright© 2022| Lady Lollipop</p>
        <div class="div-footer">
          <a class="a-footer" href="#">Privacy Policy</a>
          <a class="a-footer" href="#">Terms of Use</a>
          <router-link class="a-footer" :to="{ name: 'AboutUs' }"
            >About Us</router-link
          >
          <a class="a-footer" href="#">Contact us</a>
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
export default {
  name: "Homepage",
};
</script>
<style scoped>
@font-face {
  font-family: Graduate;
  src: url(../assets/Fonts/Graduate-Regular.ttf);
}
body {
  margin: 0 auto;
}
.home-div {
  text-align: center;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: -8px;
  left: 101px;
}

.navbar-b {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  width: 571px;
  left: 25rem;
}

.background-img {
  top: 0;
  left: 0;
  width: 100%;
  height: 757px;
  margin-top: -60px;
  opacity: 0.8;
}
p {
  margin-top: -5px;
  margin-right: 42rem;
  margin-left: 12rem;
  font-size: 50px;
  border: 1px black;
  color: white;
  font-family: Galdeano;
  text-shadow: -1px 1px 0 #000, 1px 1px 0 #000, 1px -1px 0 #000,
    -1px -1px 0 #000;
}
.b1 {
  text-align: center;
  /* display: flex; */
  flex-direction: row;
  padding-right: 22px;
  background: unset;
  font-size: 33px;
  border: none;
  color: white;
  font-family: Galdeano, sans-serif;
  text-shadow: -1px 1px 0 #000, 1px 1px 0 #000, 1px -1px 0 #000,
    -1px -1px 0 #000;
}
.b1:hover {
  text-shadow: -1px 2px 0 #000, 1px 1px 0 #000, 1px -1px 0 #000,
    -1px -1px 0 #000;
}
.b7 {
  background: #ff83b7;
  font-size: 50px;
  border: 0;
  border-radius: 23px;
  margin-left: 836px;
  /* margin-bottom: 300px; */
  color: #ffffff;
  cursor: pointer;
  display: inline-block;
  font-family: Galdeano;
  font-size: 30px;
  font-weight: 400;
  line-height: 2;
  outline: transparent;
  padding: 0 1rem;
  text-align: center;
  text-decoration: none;
  transition: box-shadow 0.2s ease-in-out;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  position: relative;
  bottom: 88px;
}
.b7:hover {
  text-shadow: -1px 1px 0 #000, 1px 1px 0 #000, 1px -1px 0 #000,
    -1px -1px 0 #000;
}
.logo {
  width: 152px;
  height: 135px;
  position: relative;
  left: 112px;
  top: 25px;
}
.layout-footer {
  background-color: transparent;
  margin-bottom: -100px;
  height: 0px;
  width: 100vw;
  position: absolute;
  bottom: 0;
  width: 100%;
}
.footer-p {
  color: white;
  font-family: GrandHotel;
  text-align: center;
  font-size: 22px;
  position: relative;
  left: 446px;
  width: 244px;
}

.div-footer {
  display: flex;
  justify-content: space-around;
  width: 600px;
  position: relative;
  left: 447px;
  bottom: 10px;
}
.a-footer {
  text-decoration: none;
  color: white !important;
  font-family: Galdeano;
  font-size: 20px;
  text-shadow: -1px 1px 0 #000, 1px 1px 0 #000, 1px -1px 0 #000,
    -1px -1px 0 #000;
}
.a-footer:hover {
  text-decoration: none;
  text-shadow: -1px 2px 0 #000, 1px 1px 0 #000, 1px -1px 0 #000,
    -1px -1px 0 #000;
}
</style>
