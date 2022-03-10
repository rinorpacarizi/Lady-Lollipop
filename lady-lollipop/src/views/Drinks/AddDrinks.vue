<template>
  <div>
       <b-form-file multiple :file-name-formatter="formatNames"></b-form-file>
  
  <div role="group" style="
    margin-top: 7px;
">
    <b-form-input
      id="input-live"
      v-model="name"
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
      v-model="price"
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
      v-model="stock"
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
        placeholder="Description"
      ></b-form-textarea>
    </b-col>
  </b-row>
 <b-row>
    <b-col sm="12" style="
    margin-top: 7px;
">
      <b-form-textarea
        id="textarea-default"
        size="sm"
        placeholder="Ingridients"
      ></b-form-textarea>
    </b-col>
  </b-row>
  </div>
</template>

<script>
export default {
  name: "AddDrinks",
};
</script>

<style scoped>
</style>
