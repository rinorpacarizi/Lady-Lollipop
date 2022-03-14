<template>
  <div>
    <h1 class="h1-add">Create an Item</h1>

    <hr style="border: 1px solid #fd4b4b9e" />
    <div>
      <div>
        <form class="form" @submit.prevent="createSweet">
          <DropzoneSweets
            :sweetId="this.$route.params.id"
            :initialFiles="sweet.files"
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
import DropzoneSweets from "@/components/Dropzones/DropzoneSweets.vue";
export default {
  name: "AddSweets",
  components: {
    DropzoneSweets,
  },
  data() {
    return {
      form: {
        name: "",
        price: 0,
        stock: 0,
        description: "",
      },
      sweet: null,
    };
  },
  created() {
    this.fetchSweet();
  },
  methods: {
    async fetchSweet() {
      this.sweet = await apiRequest.getSweets(this.$route.params.id);
      console.log("sweet", this.sweet, this.$route.params.id);
    },
    cancel() {
      this.$emit("changeDisplay", false);
    },
    async createSweet() {
      await apiRequest.createSweets({ ...this.form }).then(() => {
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
</style>