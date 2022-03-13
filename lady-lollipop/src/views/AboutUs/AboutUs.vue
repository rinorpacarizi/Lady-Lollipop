<template>

  <div class="container">
     <div class="image-header">
  <b-card class="test"
    overlay
    img-src="https://www.teahub.io/photos/full/9-90436_pretty-cake-background-cake-wallpaper-hd.jpg"
    img-alt="Card Image"
    text-variant="white"
  
  
  >
    <b-card-text>
     <h1><i>Lady Lollipop</i> </h1>
         <h3>Beginning the day with something sweet.</h3>
    
    </b-card-text>
  </b-card>
</div>
    <div class="container2">
      <div class="someText">
        <h1>About Us</h1>
        
        <p>
        The Lady Lollipop Shop specialises in exquisitely hand-crafted, premium celebration cakes for any occasion. We have a team of highly skilled cake designers and decorators who can create a truly personalised and memorable cake which is bound to delight at your special occasion.
        We have been trading since 1986 and have two shops, one based in the historic city of Oxford, the other in the market town of Banbury. Our shops are regularly featured in both local and national media.
        The Oxford Cake Shop is located within the historic Covered Market and is a focal point for many of the guided walking tours that pass through the city as well as providing locals and tourists with an opportunity to watch our skilled cake artists at work.
        </p>
        <!-- Using modifiers -->
        <b-button v-b-toggle.collapse-2 class="m-1">Get in Touch</b-button>
<div class="card-bg">
        <!-- Element to collapse -->
        <b-collapse id="collapse-2">
          <b-card
            ><h4>The Covered Market, Oxford, OX1 3DZ
            <br>
                01865 248691
                <br>

         Monday-Saturday 9:00am-5:00pm
         <br>     

       lady_lollipop@the-cake-shop.co.uk</h4></b-card
          >
        </b-collapse>
</div>
      </div>
      <img
        src="https://health.clevelandclinic.org/wp-content/uploads/sites/3/2016/07/RaspberrySmoothies_1202440369.jpg"
        alt=""
        style="border-radius:50%"
      />
    </div>

    <div></div>
  
  </div>
  
</template>
<script>
export default {
  name: "AboutUs",
};
</script>

<style scoped>

.image {
  width: 300px;

}
.btn-secondary {
  color: #fff;
  background-color: #fd4b4b !important;
  border-color: #fd4b4b !important;
}
.container2 {
  display: flex;
      margin: 61px 0 !important;
  /* width: 82%; */
  margin: auto;
}
.someText {
  width: 50%;
  padding: 20px;
}
.text-white{
        margin-bottom: 5%;
}
.position-relative{
    height: 450px;
    
}
.card-img{
    height:100%
}
h1{
        font-weight: 900;
    font-family: 'GrandHotel';
    font-size: 50px;
    color: #e3b299b8;
}
h3{
    font-family: 'GrandHotel';
    font-size: 35px;
    color: #e3b299b8;
}
h4{
    font-family: 'GrandHotel';
    font-size: 20px;
    background: #fcebf2;
}
p{
        font-family: 'GrandHotel';
    font-size: 17px;
}
.card{  background: #fcebf2;
border: none;}
</style>
