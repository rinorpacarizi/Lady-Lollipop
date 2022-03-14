<template>
  <div style="height: 485px">
    <h1 class="h1-create-edit">Edit Sweet</h1>

    <hr style="border: 1px solid #fd4b4b9e" />
    <div>
      <div>
        <form class="form">
          <div class="form-group div-create-edit">
            <label class="control-label label-create-edit label">Name </label>
            <input class="input-create-edit form-control" v-model="form.name" />
          </div>
          <div class="form-group div-create-edit">
            <label class="control-label label-create-edit label">Price</label>
            <input class="input-create-edit form-control" v-model="form.price"/>
          </div>
          <div class="form-group div-create-edit">
            <label class="control-label label-create-edit label">Stock</label>
            <input class="input-create-edit form-control" v-model="form.stock"/>
          </div>
          <div class="form-group div-create-edit">
            <label class="control-label label-create-edit label"
              >Description</label
            >
            <textarea class="input-create-edit form-control" v-model="form.description"></textarea>
          </div>
          <div>
            <button class="cancel" @click="cancel()">Cancel</button>
            <button type="submit" class="submit" @click="editSweet">Submit</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import apiRequest from "../../utility/apiRequests";
export default {
  name: "EditSweet",
  props:{
    sweets:Object,
  },
  data() {
    return {
      form: {
        name: this.sweets.name,
        price: this.sweets.price,
        stock: this.sweets.stock,
        description: this.sweets.description,
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
      console.log("sweet",this.sweets);
    },
    cancel() {
      this.$emit("changeDisplay", false);
    },
    async editSweet() {
    await apiRequest.editSweets({ ...this.form }).then(()=>{
       this.$emit("changeDisplay", false);
    })
    },
  },
};
</script>

<style>
.el-dialog__body {
  padding: 0px 12px !important;
  color: #FD4B4B;
    text-align: center;
    font-family: GrandHotel;
    font-size: 55px;
    position: relative;
}
.form {
  position: relative;
  left: 60px;
  width: 500px;
}
.submit {
  background-color: rgb(221, 27, 27);
  border: 1px solid rgb(221, 27, 27);
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, .1) 0 2px 4px 0;
  box-sizing: border-box;
  color: white;
  cursor: pointer;
  font-family: Galdeano;
  font-size: 20px;
  width: 95px;
  height: 36px;
  border-radius: 6px;
  text-align: center;
  position: relative;
  /* position: relative;
    width: 102px;
    height: 43px;
    font-size: 20px;
    border-radius: 6px;
    background-color: lightseagreen;
    color: white;
    border: none;*/
    top: 22px;
    left: 161px; 
}
.submit:hover {
  box-shadow: rgba(0, 0, 0, .15) 0 3px 9px 0;
  transform: translateY(-2px);
}
.label {
  float: left;
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
  right: 141px;
  font-size: 20px;
  top: 22px;
}
.cancel:hover {
  box-shadow: rgba(0, 0, 0, .15) 0 3px 9px 0;
  transform: translateY(-2px);
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