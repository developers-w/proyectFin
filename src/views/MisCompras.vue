<template>
  <div class="contentNav">
    <Nav />
  </div>

  <div class="misCompras">
    <div class="compras">
      <div class="link">
        <a href="">Carrito compras</a>
      </div>
      <div>
        <CursosComprados />
      </div>
    </div>
    <div class="subtotal">
      <div>
        <p>Subtotal</p>
        <p>S/.600.oo</p>
      </div>
      <input type="text" />
      <button>Continuar</button>
    </div>
    <div>
      <router-link to="/MisCompras/Pasarela">Pasarela</router-link>
    </div>
  </div>
</template>

<script>
import Nav from "../components/Nav.vue";
import CursosComprados from "../components/CursosComprados.vue";
export default {
  name: "MisCompras",
  components: {
    Nav,
    CursosComprados,
  },
};
</script>

<style>
.contentNav {
  height: 60px;
  background-color: black;
  padding: 0;
}

.misCompras {
  width: 88%;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
.compras .link {
  margin: 36px;
}

.misCompras .subtotal {
  margin-top: 100px;
  max-width: 433px;
  height: 283px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.subtotal div {
  display: flex;
  justify-content: space-between;
  margin: 50px 50px 0 50px;
}

.subtotal input {
  width: 333px;
  height: 50px;
  margin: 20px 50px 35px 50px;
}
.subtotal button {
  padding: 0;
  width: 333px;
  height: 50px;
  margin: 0px 50px 50px 50px;
}
</style>