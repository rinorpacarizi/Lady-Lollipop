<template>
  <div>
    <div class="out-nav-div">
      <div class="nav-div">
        <router-link class="p-navbar" to="/"> Home </router-link>
        <router-link class="p-navbar" to="/sweets"> Sweets</router-link
        ><router-link class="p-navbar" to="/cakes">Cakes</router-link
        ><router-link class="p-navbar" to="/drinks">Drinks</router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "NavBar",
  data() {
    return {
      activeName: "first",
    };
  },
};
</script>
<style scoped>
.nav-div {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 820px;
  position: relative;
  left: 365px;
}
.out-nav-div {
  background-color: #fd4b4b;
  height: 50px;
}
.p-navbar {
  color: white;
  text-decoration: none;
  width: 166px;
  font-size: 35px;
  font-family: GrandHotel;
  padding-bottom: 5px;
  position: relative;
  top: 3px;
  text-align: center;
  height: 50px;
}

.p-navbar:hover {
  color: #fd4b4b;
  text-decoration: none;
  background-color: white;
  height: 39px;
}
</style>