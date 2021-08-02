<template>
  <div class="contentNav">
    <Nav />
  </div>
  <div>
    <router-link to="/MisCompras/Pasarela/Consolidado">Consolidado</router-link>
  </div>
</template>

<script>
import Nav from "../components/Nav.vue";
export default {
  name: "Pasarela",
  components: {
    Nav,
  },
};
</script>

<style>
</style>