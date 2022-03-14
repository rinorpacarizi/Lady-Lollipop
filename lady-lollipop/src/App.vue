<template> 
      <div class="container-fluid" style="height: 650px;padding: 0;  margin: 0; display: table; background-color: #f9d4e478; ">

  <div id="app">
    
    <div class="Header" v-if="!navigation"><Header/></div>
     
     <!--  |
      <router-link to="/about">About</router-link> -->
      <router-view/>
    <footer class="footer" v-if="!navigation"><Footer/></footer>
 
  </div></div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
export default {
  name: 'App',
  components: {
    Header,
    Footer,
        


  },
  data(){
    return{
      navigation:null
    }
  },
  created(){
    this.checkRoute();
  },
  methods:{
    checkRoute(){
      if(this.$route.name==="Login" || this.$route.name==="Register" || this.$route.name==="Home"){
       this.navigation=true;
       return;
      }else{
        this.navigation=false;
      }
    }
  },
  watch:{
    $route(){
      this.checkRoute();
    }
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
.footer{
  

}
</style>
