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
      <router-link :to="{ name: 'Home' }"
        ><img class="logo" src="../assets/Images/logo.jpg"
      /></router-link>
      <div v-if="!user" class="header-div">
        <router-link class="profile-link profile-login" :to="{ name: 'Login' }"
          ><p>Login</p></router-link
        >
        <router-link class="profile-link" :to="{ name: 'Register' }"
          ><p>Register</p></router-link
        >
      </div>
      <div v-else class="header-div-else">
        <div style="padding-right: 20px; padding-left: 10px">
          <el-row class="block-col-2">
            <el-col :span="12" style="display: flex; flex-direction: row">
              <el-button
                @click="dialogProfileVisible = true"
                class="p-fullName"
                >{{ name }}</el-button
              >
              <el-dialog
                width="42%"
                top="5vh"
                style="height: 45rem"
                :visible.sync="dialogProfileVisible"
                ><ProfilePage></ProfilePage>
              </el-dialog>
              <el-dropdown trigger="click">
                <span class="el-dropdown-link">
                  <img src="../assets/Images/profile_icon.jpg"
                /></span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item icon="el-icon-circle-plus"
                    ><router-link :to="{ name: 'Login' }"
                      >Admin</router-link
                    ></el-dropdown-item
                  >
                  <el-dropdown-item icon="el-icon-circle-plus-outline"
                    ><router-link :to="{ name: 'Login' }"
                      >Sign Out</router-link
                    ></el-dropdown-item
                  >
                </el-dropdown-menu>
              </el-dropdown>
            </el-col>
            <router-link class="cart" :to="{ name: 'Login' }"
              ><img src="../assets/Images/cart.jpg" alt=""
            /></router-link>
          </el-row>
        </div>
      </div>
    </div>
    <NavBar></NavBar>
  </div>
</template>
<script>
import NavBar from "./NavBar.vue";
import ProfilePage from "../views/Profile/ProfilePage.vue";
import { mapGetters } from "vuex";
export default {
  name: "Header",
  components: {
    NavBar,
    ProfilePage,
  },
  data() {
    return {
      dialogProfileVisible: false,
      name: "",
    };
  },
  computed: {
    // user() {
    //   return this.$store.state.users.user;
    // },
    ...mapGetters({
      user: "user",
    }),
  },
  methods: {
    checkUser() {
      if (this.user.data) {
        let arr = [2];
        arr = this.user.data.email.split("@");
        this.name = arr[0];
      }
    },
  },
  mounted() {
    this.checkUser();
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

.search-button {
  display: contents;
}
.search-button:hover {
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
  position: relative;
  top: 2px;
}
.header-div-else {
  position: relative;
  top: 40px;
  left: 105px;
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
.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.p-fullName {
  padding-right: 5px;
  font-size: 22px;
  color: #fd4b4b;
  margin-top: -3px;
  outline: none;
  border: none;
  font-weight: 500;
  font-style: Galdeano;
  text-decoration: none;
}
.el-button:focus,
.el-button:hover {
  color: #fd4b4b !important;
  background-color: white !important;
  border: none !important;
}

.cart {
  position: relative;
  bottom: 15px;
  left: 20px;
}
</style>