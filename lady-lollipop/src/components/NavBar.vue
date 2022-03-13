<template>
  <div>
    <div class="out-nav-div">
      <div class="nav-div">
        <router-link class="p-navbar" :to="{name:'Home'}"> Home </router-link>
        <router-link class="p-navbar" :to="{name:'Sweets'}"> Sweets</router-link
        ><router-link class="p-navbar" :to="{name:'Cakes'}">Cakes</router-link
        ><router-link class="p-navbar" :to="{name:'Drinks'}">Drinks</router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "NavBar",
  data() {
    return {
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
  left: 325px;
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
  bottom: 7px;
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