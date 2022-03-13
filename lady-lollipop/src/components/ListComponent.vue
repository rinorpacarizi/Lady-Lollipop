<template>
    <div class="row">
        <div class="col-md-12">
            <table class="table table-striped">
                <thead class="thead-dark">
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Stock</th>
                        <th>Description</th>
                        <th>Ingridients</th>
                        <th>Picture</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="drink in Drinks" :key="drink._id">
                        <td>{{ drink.name }}</td>
                        <td>{{ drink.Price }}</td>
                        <td>{{ drink.Stock }}</td>
                        <td>{{ drink.Description }}</td>
                        <td>{{ drink.Ingridients }}</td>

                        <td>
                            <router-link :to="{name: 'edit-drink', params: { id: drink._id }}" class="btn btn-success">Edit
                            </router-link>
                            <button @click.prevent="deleteDrink(drink._id)" class="btn btn-danger">Delete</button>
                        </td> 
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    import axios from "axios";

    export default {
        data() {
            return {
                Drinks: []
            }
        },
        created() {
            let apiURL = 'http://localhost:4000/api/list-drink';
            axios.get(apiURL).then(res => {
                this.Drinks = res.data;
            }).catch(error => {
                console.log(error)
            });
        },
        methods: {
            deleteDrink(id){
                let apiURL = `http://localhost:4000/api/delete-drink/${id}`;
                let indexOfArrayItem = this.Drinks.findIndex(i => i._id === id);
                if (window.confirm("Nis a je e sigurt?")) {
                    axios.delete(apiURL).then(() => {
                        this.Drinks.splice(indexOfArrayItem, 1);
                    }).catch(error => {
                        console.log(error)
                    });
                }
            }
        }
    }
</script>
<style>
    .btn-success {
        margin-right: 10px;
    }
</style>