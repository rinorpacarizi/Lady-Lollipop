<template>
  <div class="layout-footer">
    <div>
      <p class="footer-p">Copyright© 2021| Lady Lollipop</p>
      <div class="div-footer">
        <a class="a-footer" href="#">Privacy Policy</a>
        <a class="a-footer" href="#">Terms of Use</a>
        <a class="a-footer" href="#">About us</a>
        <a class="a-footer" href="#">Contact us</a>
      </div>
    </div>
  </div>
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