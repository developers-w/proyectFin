<template>
 
  <div class="pasarelaPago">
  
    <div class="columna1">
      
        <div class="datosPersonales">  
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
        </div>
        
        


    </div>
    <div class="columna2">
      
    </div>

      
  </div>
    <div>
      <router-link to="/MisCompras/Pasarela/Consolidado">Consolidado</router-link>
    </div>
</template>

<script>
export default {
  name: "Pasarela",
  components: {
      
  },
};
</script>


<style scoped>

.contentNav{
  height: 60px;
 background-color: #000425;
}


.columna1{
  text-align: left; 
  width: 100% ;
  max-width:693px ; 

}

.columna1 .datosPersonales div{
  display: flex;
  justify-content: space-between;
  margin: 20px 0 30px 0;
}
.datosPersonales div input{ 
  width: 330px;
  height: 50px;
  margin: 0;
  padding: 0;
}

.columna1 .infoCard div{
  display: flex;
  justify-content: space-between;
  margin: 20px 0 10px 0;
}
.infoCard div input{ 
  width: 330px;
  height: 50px;
  margin: 0;
  padding: 0;
}
.infoCard .fecha div{
   display: flex;
   justify-content: flex-start;
    margin: 0 0 30px 0;
}
.infoCard .fecha input{ 
  width: 95px;
  height: 50px;
  margin: 0 24px 0 0;
  padding: 0;
}
.infoCard .numeroCuotas {
 

}
.numeroCuotas div {
 margin: 20px 0 30px 0;
  
}
.numeroCuotas div button {
  width: 60px;
  height: 50px;
  margin: 0 25px 0 0 ;
  padding: 0;
}
.finalizar div{
  text-align: right;
  margin: 42px 0 36px 0 ;
}
.finalizar div button{
  width: 330px;
  height: 50px;
  margin: 0;
  padding: 0;
}
.formatInput{

  font-family:Roboto;
  font-size: 12px;
  font-weight: 300;
  
}




</style>