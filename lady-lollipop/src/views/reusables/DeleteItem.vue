<template>
  <div style="height: 220px;">
    <h1 class="h1">Delete Item</h1>

    <p class="p">Are you sure?</p>
    <button class="cancel" @click="cancel()">No</button>
    <button class="submit">Yes</button>
  </div>
</template>

<script>
export default {
  name: "DeleteItem",
  methods:{
    cancel(){
      this.$emit("changeDisplay", false);
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
  background-color: rgb(0, 155, 245);
  border: 1px solid rgb(0, 155, 245);
  border-radius: 6px;
  box-shadow: rgba(0, 0, 0, .1) 0 2px 4px 0;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  font-family: Galdeano;
  position: relative;
  right: 45px;
  font-size: 22px;
  top: 22px; 
}
.cancel:hover {
  box-shadow: rgba(0, 0, 0, .15) 0 3px 9px 0;
  transform: translateY(-2px);
}
.submit {
  background-color: rgb(221, 27, 27);
  border: 1px solid rgb(221, 27, 27);
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, .1) 0 2px 4px 0;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  font-family: Galdeano;
  width: 95px;
  height: 36px;
  border-radius: 6px;
  text-align: center;
  position: relative;
  left: 50px;
}
.submit:hover {
  box-shadow: rgba(0, 0, 0, .15) 0 3px 9px 0;
  transform: translateY(-2px);
}
</style>