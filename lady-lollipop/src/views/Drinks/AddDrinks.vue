<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <h3 class="text-center">Create Drink</h3>
            <form @submit.prevent="handleSubmitForm">
                <div class="form-group">
                    <label>Name</label>
                    <input type="text" class="form-control" v-model="drink.name" required>
                </div>
                <div class="form-group">
                    <label>Price</label>
                    <input type="text" class="form-control" v-model="drink.Price" required>
                </div>
                <div class="form-group">
                    <label>Stock</label>
                    <input type="text" class="form-control" v-model="drink.Stock" required>
                </div>
                <div class="form-group">
                    <label>Description</label>
                    <input type="text" class="form-control" v-model="drink.Description" required>
                </div>
                <div class="form-group">
                    <label>Ingridients</label>
                    <input type="text" class="form-control" v-model="drink.Ingridients" required>
                </div>
                <div class="form-group">
                    <label>picture</label>
                    <input type="text" class="form-control" v-model="drink.picture" required>
                </div>
                <div class="form-group">
                    <button class="btn btn-danger btn-block">Create</button>
                </div>
            </form>
        </div>
    </div>
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
