<template>
  <div>
    <h1 class="h1-add">Create an Item</h1>

    <hr style="border: 1px solid #fd4b4b9e" />
    <div>
      <div>
        <form class="form" @submit.prevent="createCake">
          <DropzoneCakes
            :cakeId="this.$route.params.id"
            :initialFiles="cake.files"
          />

          <div class="form-group div-create-edit">
            <label class="control-label label-create-edit">Name</label>
            <input class="input-create-edit form-control" v-model="form.name" />
          </div>
          <div class="form-group div-create-edit">
            <label class="control-label label-create-edit">Price</label>
            <input
              class="input-create-edit form-control"
              v-model="form.price"
            />
          </div>
          <div class="form-group div-create-edit">
            <label class="control-label label-create-edit">Stock</label>
            <input
              class="input-create-edit form-control"
              v-model="form.stock"
            />
          </div>
          <div class="form-group div-create-edit">
            <label class="control-label label-create-edit">Description</label>
            <textarea
              class="input-create-edit form-control"
              v-model="form.description"
            ></textarea>
          </div>
          <div
            class="form-group"
            style="
              display: flex;
              justify-content: space-between;
              margin-left: 15px;
            "
          >
            <button class="cancel-create-edit" @click="cancel()">Cancel</button>
            <button class="submit-create-edit" type="submit">Create</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import apiRequest from "../../utility/apiRequests";
import DropzoneCakes from "@/components/Dropzones/DropzoneCakes.vue";
export default {
  name: "AddCakes",
  components: {
    DropzoneCakes,
  },
  data() {
    return {
      form: {
        name: "",
        price: 0,
        stock: 0,
        description: "",
      },
      cake: null,
    };
  },
  created() {
    this.fetchCake();
  },
  methods: {
    async fetchCake() {
      this.sweet = await apiRequest.getCakes(this.$route.params.id);
    },
    cancel() {
      this.$emit("changeDisplay", false);
    },
    async createCake() {
      await apiRequest.createCakes({ ...this.form }).then(() => {
        this.$emit("changeDisplay", false);
      });
    },
  },
};
</script>

<style scoped>
.form {
  position: relative;
  left: 60px;
  width: 500px;
}
.h1-add {
  color: #fd4b4b;
  text-align: center;
  font-family: GrandHotel;
  font-size: 55px;
  position: relative;
}
.div-create-edit {
  position: relative;
  left: 9px;
  color: #fd4b4b;
  font-weight: 500;
  font-family: Galdeano;
  font-size: 20px;
}
.div-create-edit{
      position: relative;
    left: 9px;
    color: #FD4B4B;
    font-weight: 500;
    font-family: Galdeano;
    font-size: 20px;
}
.submit-create-edit {
    margin-top: 13px;
    margin-bottom: 15px;
  background-color: rgb(0, 155, 245);
  border: 1px solid rgb(0, 155, 245);
  border-radius: 4px; 
  box-shadow: rgba(0, 0, 0, .1) 0 2px 4px 0;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  font-family: Galdeano;
  font-size: 16px;
  font-weight: 400;
  outline: none;
  padding: 8px 20px;
  text-align: center;
}
.submit-create-edit:hover {
  box-shadow: rgba(0, 0, 0, .15) 0 3px 9px 0;
  transform: translateY(-2px);
}
.cancel-create-edit {
    margin-top: 13px;
    margin-bottom: 15px;
  background-color: rgb(221, 27, 27);
  border: 1px solid rgb(221, 27, 27);
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, .1) 0 2px 4px 0;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  font-family: Galdeano;
  font-size: 16px;
  font-weight: 400;
  outline: none;
  padding: 8px 20px;
  text-align: center;
}
.cancel-create-edit:hover {
  box-shadow: rgba(0, 0, 0, .15) 0 3px 9px 0;
  transform: translateY(-2px);
}
</style>