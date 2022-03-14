<template>
  <div class="card-div">
    <CardCake v-for="cake in cakes" :key="cake._id" :cake="cake"/>
    <el-button type="text" class="add" @click="addFormVisible = true"
      ><i class="el-icon-plus"></i
    ></el-button>
    <el-dialog top="12vh" width="43%" height="" :visible.sync="addFormVisible">
      <AddCake />
    </el-dialog>
  </div>
</template>
<script>
import CardCake from "../reusables/CardCake.vue";
import AddCake from "./AddCake.vue";
import apiRequests from "../../utility/apiRequests";
import { mapGetters } from "vuex";
export default {
  name: "CakePage",
  components: {
    CardCake,
    AddCake,
  },
  data() {
    return {
      addFormVisible: false,
    };
  },
  created() {
    this.fetchCakes();
  },
  computed: {
    ...mapGetters({
      user: "user",
      cakes: "cakesList",
    }),
  },
  methods: {
    async fetchCakes() {
      const result = await apiRequests.getCakesList();
       console.log("res",result)
      this.$store.dispatch("fetchCakes", result);
    },
  },
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
.add {
  color: white;
  background-color: #fd4b4b;
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