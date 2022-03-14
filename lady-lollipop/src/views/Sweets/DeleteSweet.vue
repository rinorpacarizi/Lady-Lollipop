<template>
  <div style="height: 220px;">
    <h1 class="h1">Delete Sweet</h1>

    <p class="p">Are you sure?</p>
    <button class="cancel" @click="cancel()">No</button>
    <button class="submit" @click="deleteSweets">Yes</button>
  </div>
</template>

<script>
import apiRequest from "../../utility/apiRequests";
export default {
  name: "DeleteSweet",
  props: {
    id: String,
  },
  methods:{
    cancel(){
      this.$emit("changeDisplay", false);
      console.log(this.id);
    },
     deleteSweets() {
       apiRequest.deleteSweets(this.id);
      this.$emit("changeDisplay", false);

      const result = apiRequest.getSweetsList();
      this.$store.dispatch("fetchSweets", result);
    },
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
.h1 {
  font-family: GrandHotel;
  font-size: 45px;
  color: #fd4b4b;
}
.p {
  font-family: Galdeano;
  font-size: 25px;
}
.cancel {
  width: 95px;
  height: 36px;
  border-radius: 6px;
  background-color: lightseagreen;
  color: white;
  border: none;
  position: relative;
  right: 45px;
  font-size: 22px;
  top: 22px;
}
.submit {
  color: white;
  background: red;
  border: none;
  width: 95px;
  height: 36px;
  border-radius: 6px;
  text-align: center;
  position: relative;
  left: 50px;
}
</style>