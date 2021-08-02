<template>
   <div class="nav">
         <div>
               <div class="logo">                
                   <img src="../assets/logo.png" alt="" />
              </div>
              
                            <div class="contenedor">
                                                <div class="carrito">
                                                              <img src="../assets/carrito.png" alt="" />
                                                              <p  >{{contador}}</p>
                                                </div>

                                                  <div class="hamburgueza">
                                                    
                                                  </div>
                            </div>
         </div>
     </div>
</template>

<script>
export default {
    data() {
        return {
            contador:0
        }
    },

}
</script>

<style>
.nav {
 position: absolute;
 top: 0;
 width: 100%;
 padding-top: 14px;
}

.nav > div{
  width: 88%; 
  height: 32px;
  margin: 0 auto;   
  display: flex;
  justify-content: space-between;
  

}
.nav .contenedor{
  width: 75px;
}

.carrito{
  position: relative;
}
.carrito p{
  width: 15px;
  height: 15px;
 
  text-align: center;
border: 1px solid #5640FF;
background-color: #5640FF;
border-radius: 50%;
font-size: 10px;
position: absolute;
top: 0;
left: 35px;

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