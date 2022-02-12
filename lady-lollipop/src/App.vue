<template>
  <div id="app">
    <div class="Header"><Header/></div>

    <div style="height:430px;"></div>

    <div><Footer/></div>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

body {
    background-color: #f9d4e478;
    margin: 0 auto;
}
.Header{
  position: relative;
  bottom: 60px;
}


</style>
