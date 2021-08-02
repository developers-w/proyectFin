<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
      <Postula/>
      <Portada/>
      
       <Nav/> 
      
     
        <Cursos/>
        <Beneficios/>
        <Footer/>
        
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Portada from '../components/Portada.vue';
import Cursos from '../components/Cursos.vue';
import Beneficios from '../components/Beneficios.vue';
import Footer from '../components/Footer.vue';
import Nav from '../components/Nav.vue';
import Postula from '../components/Postula.vue';
export default {
  name: 'Home',
  components: {
    // HelloWorld
    Portada,
    Cursos,
    Beneficios,
    Footer,
    Nav,
    Postula
  }
}
</script>
<style >


  
</style>
