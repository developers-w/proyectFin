<template>
  <div class="contentNav">
    <Nav/> 
  </div>
  <div class="pasarela">
  
    <div class="columna1">
       <div class="link">
          <p>Pasarela de Pagos</p>
       </div>
       
        <div class="metodoPago">
           <p>Selecciona tu método de pago</p>
          <div>
            <button>Tarjeta de crédito</button>
          <button>Tarjeta de débito</button>
          <button>Depósito pago efectivo</button>
          </div>
        </div>
        
        <!-- <div class="datosPersonales">  
          <p>Datos personales</p>        
              <div  class="formatInput">
                      <input type="text"  placeholder="Documento de identidad">
                    
                      <input type="text" placeholder="Correo electrónico">
              </div>
        </div>
        <div class="infoCard">
          <p>Ingresa la informacion de tu tarjeta</p>
         
         <div >
            <input class="formatInput"  type="text"  placeholder="Nombre y apellido">
          
            <input class="formatInput" type="text" value="7567 4342 3423 5523">
         </div>
           <div class="fecha">
             <div>
               <input type="text" placeholder="Mes">
               <input type="text" placeholder="Año">
               <input type="text" placeholder="cvc/cvv">
          
             </div>
              </div>
 
        </div>
        <div class="numeroCuotas">
          <p>N° de cuotas</p>
          <div>
            <button>01</button><button>01</button><button>01</button>
          </div>
        </div>
        <div class="finalizar">
          <p>Solicitar factura</p>
          <div>
            <button>Finalizar compra</button>
          </div>
        </div> -->
        
        <div metodContent>
          <PasarelaPago/>

        </div>


    </div>
    <div class="columna2">
      <CursosComprados/>
    </div>

      
  </div>
    <div>
      <router-link to="/MisCompras/Pasarela/Consolidado">Consolidado</router-link>
    </div>
</template>

<script>
import Nav from "../components/Nav.vue";
import PasarelaPago from "../components/PasarelaPago.vue";
import CursosComprados from "../components/CursosComprados.vue"
export default {
  name: "Pasarela",
  components: {
    Nav,
    PasarelaPago,
    CursosComprados
  },
};
</script>


<style scoped>

.contentNav{
  height: 60px;
 background-color: #000425;
}

.pasarela{
width: 88%;
height: 80vh;
font-family: Poppins;
font-size: 16px;
font-weight: bold;
margin: 0 auto;
margin-top: 36px;
display: flex;

}
.columna1{
  text-align: left; 
  width: 100% ;
  max-width:693px ; 
  margin-right: 60px;

}
.columna2{
  margin: 0;
  padding: 0;
}
.columna1 link{
  /* background-color: blue; */

}

.columna1 .metodoPago{
  margin-top: 25px;
  
  
 
 
} 
.columna1 .metodoPago div{
  display: flex;
  justify-content: space-between;
  margin: 20px 0 30px 0;
  
  
}
.columna1 .metodoPago div button{
  width: 227px;  
  height: 50px;
  margin: 0 ;
  padding: 0;
  font-family: Roboto;
  font-size: 14px;
  font-weight: bold; 
}
.columna2{
  width: 100%;
  max-width: 433px;
}




</style>