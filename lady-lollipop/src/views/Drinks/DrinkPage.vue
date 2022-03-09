<template>
   <div>
    <h1 class="title"> Drinks</h1>
    <ul class="row-div">
      
            <li class="main-inside-div">
                <div>
                    <a><img class="img-drink" src="https://natashaskitchen.com/wp-content/uploads/2020/06/Strawberry-Smoothies-5.jpg"/></a>
                </div>
                <div>
                    <p class="name-p"><a >Name</a></p>
                    <p class="price-p" step="0.01">Price</p>
                    <p class="stock-p">Stock in stock</p>
                </div>
              
                    <a class="cart-button-enabled"><p>Add To Cart</p></a>

                    <!--                 
                    <div>
                        <button disabled class="cart-button">Add To Cart</button>
                    </div> -->

                <div class="index-button-div">

                    <a class="edit-delete-drinks" href="/Drinks/Edit/3" style="color: white;"><font-awesome-icon icon="pencil" /></a>
                    <a class="edit-delete-drinks" href="/Drinks/Delete/3" style="color: white;"><font-awesome-icon icon="trash-can" /></a>
                </div>
            </li>
    </ul>
</div>



</template>

<script>
export default {
    name:"DrinkPage",
}
</script>
<style scoped>

</style>