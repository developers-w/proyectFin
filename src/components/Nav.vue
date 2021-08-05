<template>
  <div class="nav">
    <div>
      <div class="logo">
        <img src="../assets/logo.png" alt="" />
      </div>

      <div class="contenedor" >
        <div class="carrito">
          <router-link to="/MisCompras"><img src="../assets/carrito.png" alt="" /></router-link>
          <p>{{sumarCursos}}</p>
        </div>

        <div class="hamburgueza"></div>
        <Hambur />
      </div>
    </div>
  </div>
</template>

<script>
import Hambur from "../components/Hambur.vue";
import {mapState}from 'vuex'

export default {
  name: "Nav",
  components: {
    Hambur,
  },

  data() {
    return {
      contador: 0,
    };
  },
  computed:{
    ...mapState(['sumarCursos'])
  }
};
</script>

<style>
.nav {
  position: absolute;
  top: 0;
  width: 100%;
  padding-top: 14px;
}

.nav > div {
  width: 88%;
  height: 32px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
.nav .contenedor {
  width: 80px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.carrito {
  position: relative;
}
.carrito p {
  width: 15px;
  height: 15px;

  text-align: center;
  border: 1px solid #5640ff;
  background-color: #5640ff;
  border-radius: 50%;
  font-size: 10px;
  position: absolute;
  top: 0;
  left: 11px;
}
.logo img {
  width: 184px;
  height: 32px;
}
.carrito img {
  width: 28px;
  height: 26px;
}
</style>