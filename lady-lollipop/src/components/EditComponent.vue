<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <h3 class="text-center">Update Student</h3>
            <form @submit.prevent="handleUpdateForm">
                <div class="form-group">
                    <label>Name</label>
                    <input type="text" class="form-control" v-model="drink.name" required>
                </div>
                <div class="form-group">
                    <label>Picture</label>
                    <input type="text" class="form-control" v-model="drink.picture" required>
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
                    <button class="btn btn-danger btn-block">Update</button>
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
            drink: { }
        }
    },
    created() {
        let apiURL = `http://localhost:4000/api/edit-drink/${this.$route.params.id}`;
        axios.get(apiURL).then((res) => {
            this.drink = res.data;
        })
    },
    methods: {
        handleUpdateForm() {
            let apiURL = `http://localhost:4000/api/update-drink/${this.$route.params.id}`;
            axios.put(apiURL, this.drink).then((res) => {
                console.log(res)
                this.$router.push('/view-drinks')
            }).catch(error => {
                console.log(error)
            });
        }
    }
}
</script>