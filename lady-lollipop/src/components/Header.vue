<template>
  <div>
    <div class="header-layout">
      <div>
        <form>
          <input
            name="searchString"
            type="text"
            class="search-bar"
            placeholder="Search"
          />
          <button type="submit" class="search-button">
            <img class="search-icon" src="../assets/Images/search.jpg" />
          </button>
        </form>
      </div>
       <router-link :to="{name:'Home'}"><img class="logo" src="../assets/Images/logo.jpg" /></router-link>
      <div class="header-div">
        <router-link class="profile-link profile-login" :to="{name:'Login'}"><p>Login</p></router-link>
        <router-link class="profile-link" :to="{name:'Register'}"><p>Register</p></router-link>
      </div>
    </div>

    <div>
      <!-- <div style="padding-right: 20px; padding-left: 10px;" class="dropdown">
                <button class="btn dropdown-toggle " style="display:flex;" type="button" id="profile-btn" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <p class="p-fullName"> </p>
                    <img src="../assets/Images/profile_icon.jpg" />
                </button>
                <ul class="dropdown-menu" aria-labelledby="profile-btn">
                    <li>
                        <a class="dropdown-item" > Orders</a>
                    </li>
                  
                        <li>
                            <a class="dropdown-item" > Users</a>
                        </li>
                    

                    <li>
                        <form asp-controller="Account" asp-action="Logout">
                            <button class="dropdown-item">Log Out</button>
                        </form>
                    </li>
                </ul>
            </div>
 -->
    </div>
    <NavBar></NavBar>
    
  </div>
</template>
<script>
import NavBar from './NavBar.vue'
export default {
  name: "Header",
  components:{
    NavBar
  },
  data() {
    return {};
  },
};
</script>
<style scoped>
@font-face {
  font-family: GrandHotel;
  src: url(../assets/Fonts/GrandHotel-Regular.ttf);
}
@font-face {
  font-family: Galdeano;
  src: url(../assets/Fonts/Galdeano-Regular.ttf);
}

.search-button{
    display: contents;
}
.search-button:hover{
    cursor: pointer;
}
.search-bar {
  border: 2px white solid;
  border-radius: 12px;
  color: white;
  background-color: #fd4b4b;
  position: relative;
  top: 30px;
  right: 120px;
  padding-left: 10px;
  height: 35px;
  width: 250px;
}
.search-icon {
  width: 37px;
  height: 34px;
  position: relative;
  top: 41px;
  right: 168px;
}
::placeholder {
  color: white;
  font-size: 16px;
}
.profile-login {
  padding-right: 10px;
}

.search-bar:focus {
  border: 2px solid white;
  outline: none;
  background-color: #fd4b4b;
}
.search-bar:-webkit-autofill {
  border: 2px solid white;
  outline: none;
  background-color: #fd4b4b !important;
  transition-delay: 9999s;
}
.header-layout {
  background-color: white;
  height: 115px;
  display: flex;
  justify-content: space-evenly;
}
.logo {
  position: relative;
  top: 7px;
  right: 62px;
  width: 120px;
  height: 100px;
}
.header-div {
  display: flex;
  flex-direction: row;
  position: relative;
  left: 154px;
  bottom: 15px;
}
.profile-link {
  text-decoration: none;
  color: #fd4b4b;
  font-family: Galdeano;
  font-size: 23px;
  position: relative;
  top: 40px;
  left: 15px;
}
.profile-link:hover {
  text-decoration: none;
  color: #fd4b4b;
  font-family: Galdeano;
}

.cart-icon {
  width: 52px;
  height: 65px;
  position: relative;
  top: 23px;
  right: 20px;
}
</style>