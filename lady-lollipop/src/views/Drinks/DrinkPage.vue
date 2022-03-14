<template>
  <div class="card-div">
    <CardDrink v-for="drink in drinks" :key="drink._id" :drink="drink" />
    <el-button type="text" class="add" @click="addFormVisible = true"
      ><i class="el-icon-plus"></i
    ></el-button>
    <el-dialog top="12vh" width="43%" height="" :visible.sync="addFormVisible">
      <AddDrinks />
    </el-dialog>
  </div>
</template>
<script>
import CardDrink from "../reusables/CardDrink.vue";
import AddDrinks from "./AddDrinks.vue";
import apiRequests from "../../utility/apiRequests";
import { mapGetters } from "vuex";
export default {
  name: "DrinkPage",
  components: {
    CardDrink,
    AddDrinks,
  },
  data() {
    return {
      addFormVisible: false,
    };
  },
  created() {
    this.fetchDrinks();
  },
  computed: {
    ...mapGetters({
      user: "user",
      drinks: "drinksList",
    }),
  },
  methods: {
    async fetchDrinks() {
      const result = await apiRequests.getDrinksList();
      console.log("res", result);
      this.$store.dispatch("fetchDrinks", result);
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
