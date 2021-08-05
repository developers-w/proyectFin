<template>
  <div class="contentNav">
    <Nav/>     
  </div>  
  <div>
  <div class="consolidado">
    <div class="contentConsolidado">
      <div class="column1">
          <div class="link"> 
          <router-link to="">Resumen de compras</router-link>
          </div>
          <div class="contentCursosComprados">
             <CursosComprados/>   
          </div>
          <div class="total">
            <p>Precio final</p>
            <p>S/600.00</p>
          </div>

      </div>
      <div class="column2">
        <div class="card">
              <h2>¡Compra exitosa!</h2>
              <p>La boleta o factura solicitada será enviáda a tu correo en unos momentos</p>
              <button>Volver a mis cursos</button>
        </div>
      </div>
    </div>
  </div>
  </div>
 
  
</template>

<script>
import Nav from "../components/Nav.vue";
import CursosComprados from '../components/CursosComprados.vue';
export default {
  name: "Consolidado",
  components: {
    Nav,
    CursosComprados
  },
};
</script>   

<style scoped>
.contentNav{
  height: 60px;
  background-color:#000425;
  margin: 0 auto  ;

}
.consolidado{
  
  width: 88%;
  height: 80vh; 
  margin: 0 auto; 

}
.contentConsolidado{
/* max-width: 1194px; */
/* width:100% ; */
/* min-height: 80vh;     */
margin: 0 auto; 
display: flex;
margin-top: 36px;
}
.contentConsolidado .column1{
  

  max-width: 693px;
  width: 100%;
margin-right: 60px;
}

.column1 .link {
  font-family: Poppins;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 36px;
  text-align: left;
  
}
.column1 .total{
  margin-top: 17px;
  font-family: Poppins;
  font-size: 20px;
  font-weight: bold;
  color: #5640ff;
  display: flex;
  justify-content: space-between;
}
.column2 .card{

  max-width: 433px;
  height: 257px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: white;
padding: 50px;
  text-align: left;

}
.card p{
  font-family: Roboto;
  font-size: 14px;
  font-weight: 300;
}
.card button{
  font-family: Poppins;
  font-size: 14px;
  font-weight: bold;
  width: 100%;
  height: 50px;
  border-radius: 7px;
}


</style>