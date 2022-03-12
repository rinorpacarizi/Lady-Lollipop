
<template>
<div>

 <div>
    <h1 class="title">Drinks</h1>
    
    <p style="text-align: center">
      <!-- <a class="create-button" asp-action="Create">Add <font-awesome-icon icon="circle-plus" /></a> -->
      <div class="create-button" v-b-modal.modal-no-backdrop2
        ><router-link class="nav-link pr-3" to="/create-drink">Add Drink</router-link><font-awesome-icon icon="circle-plus"
      /></div>
    </p>
    <ul class="row-div">
      <li class="main-inside-div">
        <div>
          <a
            ><img
              class="img-drink"
              src="https://natashaskitchen.com/wp-content/uploads/2020/06/Strawberry-Smoothies-5.jpg"
          /></a>
        </div>
        <div>
          <p class="name-p"><a>Name</a></p>
          <p class="price-p" step="0.01">Price</p>
          <p class="stock-p">Stock in stock</p>
        </div>
        <div>
          <b-button class="cart-button-enabled" v-b-modal.modal-no-backdrop
            >Add To Cart</b-button
          >

          <!-- ----Modali i Add--- -->
          <b-modal
            id="modal-no-backdrop2"
            hide-backdrop
            content-class="shadow"
            title="Add Modal"
          >
            <AddDrinks></AddDrinks>
          </b-modal>
          <!-- ----Modali i Edit--- -->
          <b-modal
            id="modal-no-backdrop3"
            hide-backdrop
            content-class="shadow"
            title="Edit Modal"
          >
            <EditDrinks></EditDrinks>
          </b-modal>
          <!-- ----Modali i Delete--- -->
          <b-modal
            id="modal-no-backdrop4"
            hide-backdrop
            content-class="shadow"
            title="Delete Cart"
          >
            <h2>Titulli i pijes</h2>
            <p class="cart-number">Are you sure u want to delete it?</p>
          </b-modal>
        </div>
        <div class="index-button-div">
          <b-button
            class="edit-delete-drinks"
            v-b-modal.modal-no-backdrop3
            style="color: white"
            ><font-awesome-icon
              icon="pencil"
              style="position: relative; left: -6px"
          /></b-button>
          <b-button
            class="edit-delete-drinks"
            v-b-modal.modal-no-backdrop4
            style="color: white"
            ><font-awesome-icon
              icon="trash-can"
              style="position: relative; left: -6px"
          /></b-button>
        </div>
      </li>
    </ul>
  </div>
  </div>
</template>

 <script>
import axios from 'axios';
import AddDrinks from "./AddDrinks.vue";
import EditDrinks from "./EditDrinks.vue";
export default {
  name: "DrinkPage",
  components: {
    AddDrinks,
    EditDrinks
  },
  data() {
      return {
          Drink: {}
      }
  },
  created() {
      let apiURL = 'http://localhost:4000/api/list-drink';
      axios.get(apiURL).then(res => {
          this.Drink = res.data;
      }).catch(error => {
          console.log(error)
      });
  },
  methods: {
    formatNames(files) {
      return files.length === 1
        ? files[0].name
        : `${files.length} files selected`;
    },
    deleteDrink(id){
        let apiURL = `http://localhost:4000/api/delete-student/${id}`;
        let indexOfArrayItem = this.Drink.findIndex(i => i._id === id);
        if (window.confirm("Do you really want to delete?")) {
            axios.delete(apiURL).then(() => {
                this.Drink.splice(indexOfArrayItem, 1);
            }).catch(error => {
                console.log(error)
            });
        }
    }
  },
  computed: {
    nameState() {
      return this.name.length > 2 ? true : false;
    },
  },
  
};
 </script>
<style scoped>
</style>