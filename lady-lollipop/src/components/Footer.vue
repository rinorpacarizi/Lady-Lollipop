<template>
  <footer class="layout-footer">
    <div>
      <p class="footer-p">Copyright© 2022| Lady Lollipop</p>
      <div class="div-footer">
        <a class="a-footer" href="#">Privacy Policy</a>
        <a class="a-footer" href="#">Terms of Use</a>
         <router-link  class="a-footer" :to="{ name: 'AboutUs' }"
          >About Us</router-link
        >
        <a class="a-footer" href="#">Contact us</a>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
.layout-footer {
    background-color: #FD4B4B;
    height: 84px;
    width: 100vw;
    position:relative;
   bottom:0;
   width:100%;
}
.footer-p{
    color:white;
    font-family:GrandHotel;
    text-align:center;
    font-size:22px;
    padding-top: 10px;
}

.div-footer {
    display: flex;
    justify-content: space-around;
    width: 600px;
    position: relative;
    left: 450px;
    bottom: 10px;
}
.a-footer{
    text-decoration:none;
    color:white !important;
    font-family:Galdeano;
    font-size:20px;
}
.a-footer:hover{
    text-decoration:none;
}
</style>