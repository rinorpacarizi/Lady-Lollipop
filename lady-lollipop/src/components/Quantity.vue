<template>
  <div class="quantity">
    <b-input-group>
      <b-input-group-prepend>
        <b-btn variant="info" @click="decrement()">-</b-btn>
      </b-input-group-prepend>

      <b-form-input type="number" min="0.00" :value="quantity"></b-form-input>

      <b-input-group-append>
        <b-btn variant="info" @click="increment()">+</b-btn>
      </b-input-group-append>
    </b-input-group>
  </div>
</template>
<script>
export default {
  name: "Quantity",
  data() {
    return {
      quantity: 1
    };
  },
  methods: {
    increment() {
      this.quantity++;
    },
    decrement() {
      if (this.quantity === 1) {
        alert("Negative quantity not allowed");
      } else {
        this.quantity--;
      }
    }
  }
};
</script>
<style>
.quantity {
  max-width: 150px;
  width: 100%;
}

.quantity input {
  text-align: center;
}
.btn-info{
        background-color: #FD4B4B!important;
    border-color: #FD4B4B !important;
}
</style>
