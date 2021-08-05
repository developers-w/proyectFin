<template>
  <div class="contentNav">
    <Nav />
  </div>

  <div class="misCompras">
     <div class="link">
        <router-link to="/"><span>Carrito de compras</span></router-link>
      </div>
    <div class="content">
      <div class="compras">
     
      <div>
        <CursosComprados />
      </div>
    </div>
    <div class="subtotal">
      <div>
        <p>Subtotal</p>
        <p>S/{{subtotal}}</p>
      </div>
      <input type="text" placeholder="Agregar un código de descuesto"/>
      <button>Continuar</button>
    </div>
    <div>
    </div>
      
    </div>
  </div>
  <router-link to="/MisCompras/Pasarela">Pasarela</router-link>
</template>

<script>
import Nav from "../components/Nav.vue";
import CursosComprados from "../components/CursosComprados.vue";
import {mapState} from 'vuex'
export default {
  name: "MisCompras",
  components: {
    Nav,
    CursosComprados
  },
  computed:{
    ...mapState(['subtotal'])
  }
};
</script>

<style scoped>

.contentNav {
  height: 60px;
  background-color: black;
  padding: 0;
}
.link span{
  font-family: Poppins;
  font-size: 20px;
  font-weight: bold;
  
}

.misCompras {
  width: 88%;
  height: 70vh;
  margin: 0 auto;
    
  
}
.misCompras .link {
  margin: 36px 0 36px 0;
  text-align: left;
}
.misCompras .content{
  width: 100%;
  height: 100%;
  display: flex;
  margin-right: 60px;
}
.content .subtotal{
  width: 433px;
  height: 283px;
  padding: 50px;
 
  font-family: Poppins;
  font-size:  20px;
  font-weight: bold;
  color: #5440ff;
  background-color: white
}
.subtotal div{
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;

}
.subtotal input{
  width:100% ;
  height: 50px;
  border-radius: 5px;
  font-family: Roboto;
  font-size: 12px;
  font-weight: 300;
border-style: double;
padding-left: 20px;
}

.subtotal button{
  width: 100%;
  height: 50px;
  margin-top: 35px;
}
.content .compras{
  width: 693px;
  margin-right: 60px;

}

</style>