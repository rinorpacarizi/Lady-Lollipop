<template>
  <div class="card-div">
    <CardSweet />
    <CardSweet />
    <CardSweet />
    <CardSweet />
    <CardSweet />

    <el-button
      type="text"
      class="add"
      @click="addFormVisible = true"
      ><i class="el-icon-plus"></i
    ></el-button>
    <el-dialog top="12vh" width="43%" height="" :visible.sync="addFormVisible">
      <AddSweets />
    </el-dialog>
  </div>
</template>
<script>
import CardSweet from "../reusables/CardSweet.vue";
import AddSweets from "./AddSweets.vue";
export default {
  name: "SweetPage",
  components: {
    CardSweet,
    AddSweets,
  },
  data(){
      return{
          addFormVisible: false,
      }
  }
};
</script>
<style scoped>
.card-div {
  display: flex;
  flex-direction: row;
  flex: 1 0 25%;
  align-items: center;
  flex-wrap: wrap;
}
.add{
    color: white;
    background-color: #FD4B4B;
    position: fixed;
    border: none;
    border-radius: 30px;
    top: 50%;
    width: 42px;
    height: 42px;
    text-align: center;
    padding-top: 10px;
    font-size: 22px;
    right: 12px;
}
</style>