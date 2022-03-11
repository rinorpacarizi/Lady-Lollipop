<template>
    <div> <p>this is homepage --> go at homepage.vue at components</p>
            <p>or else go tooo</p>
        <router-link  :to="{ name: 'Sweets' }"> Sweets</router-link>    
    
    </div>
    
</template>
<script>
export default {
    name:"Homepage"
}
</script>
<style scoped>

</style>