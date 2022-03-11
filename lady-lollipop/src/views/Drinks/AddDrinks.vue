<template>
<form @submit.prevent="handleSubmitForm">
  <div>
       <b-form-file multiple :file-name-formatter="formatNames"></b-form-file>
  
  <div role="group" style="
    margin-top: 7px;
">
    <b-form-input
      id="input-live"
     v-model="drink.name"
      :state="nameState"
      aria-describedby="input-live-help input-live-feedback"
      placeholder="Name"
      trim
    ></b-form-input>

    <!-- This will only be shown if the preceding input has an invalid state -->
    <!-- <b-form-invalid-feedback id="input-live-feedback">
      Enter at least 3 letters
    </b-form-invalid-feedback> -->
  </div>
 <div role="group" style="
    margin-top: 7px;
">
    <b-form-input
      id="input-live"
      v-model="drink.Price"
      :state="priceState"
      aria-describedby="input-live-help input-live-feedback"
      placeholder="Price"
      trim
    ></b-form-input>


  </div>
 
 <div role="group" style="
    margin-top: 7px;
">
    <b-form-input
      id="input-live"
      v-model="drink.Stock"
      :state="stockState"
      aria-describedby="input-live-help input-live-feedback"
      placeholder="Stock"
      trim
    ></b-form-input>

   
  </div>
  <b-row  style="
    margin-top: 7px;
">
    <b-col sm="12">
      <b-form-textarea
        id="textarea-default"
        size="sm"
        v-model="drink.Description"
        placeholder="Description"
      ></b-form-textarea>
    </b-col>
  </b-row>
 <b-row>
    <b-col sm="12" style=" margin-top: 7px;">
      <b-form-textarea
        id="textarea-default"
        size="sm"
        v-model="drink.Ingridients"
        placeholder="Ingridients"
      ></b-form-textarea>
    </b-col>
  </b-row>

  <div class="form-group">
      <button class="btn btn-danger btn-block">Create</button>
  </div>
  </div>
</form>

</template>

<script>
    import axios from "axios";
    export default {
        data() {
            return {
                drink: {
                   name: '',
                   picture: '',
                   Price: '',
                   Stock: '',
                   Description: '',
                   Ingridients: ''
                }
            }
        },
        methods: {
            handleSubmitForm() {
                let apiURL = 'http://localhost:4000/api/create-drink';
                
                axios.post(apiURL, this.drink).then(() => {
                  this.$router.push('/')
                  this.drink = {
                   name: '',
                   picture: '',
                   Price: '',
                   Stock: '',
                   Description: '',
                   Ingridients: ''
                  }
                }).catch(error => {
                    console.log(error)
                });
            }
        }
    }
</script>

<style scoped>
</style>
