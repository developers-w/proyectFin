<template>
  <div class="postula"> 
      <div class="form-post" >
        <div class="wsp"> 
            <img src="../assets/wsp.png" alt="wsp">
        </div>
      <form @submit.prevent="procesarInfo">
            <h3>Postula y obten un 10% de</h3>
          <h3>descuento en el programa</h3>
           
          <div>
            <input class="control" type="text" placeholder="NOMBRE" v-model="postulante.nombre" required/>
          </div>

          <div>
            <input class="control" type="text" placeholder="CELULAR" v-model.number="postulante.celular"/>
          </div>
          <div>
            <input class="control" type="email" placeholder="EMAIL" v-model="postulante.email"/>
          </div>
          <div>
              <input class="control" type="text" placeholder="PROGRAMA" v-model="postulante.programa"/>
          </div>
          <div>
            <input type="checkbox" id="check-1" value="Acepto" v-model="postulante.politica" >
            <label for="check-1">Acepto las politicas de privacidad</label>
          </div>
          <div>
              <button type="submit">Quiero Postular</button>
          </div>
      </form>
    </div>  
  </div>

</template>

<script>
import { v4 as uuidv4 } from 'uuid';
import { mapActions } from 'vuex';

export default {
    data(){
      return{
          postulante:{
              id: '',
              nombre: '',
              celular: '',
              email: '',
              programa: '',
              politica: [],
          },
      };
    },
    methods: {
        ...mapActions(['setPostulanteAction']),
         procesarInfo(){
           if(this.postulante.nombre.trim() === '') {
            console.log('campo vacio');
            return;
          }
          

          //genera id
          this.postulante.id=uuidv4();
          console.log(this.postulante);

          //mandar al action
          this.setPostulanteAction(this.postulante);
          //console.log(this.postulante);
        

        //reset
        this.postulante = {
          id: '',
          nombre: '',
          celular: '',
          email: '',
          programa: '',
          politica: [],
        }
      },
    },

};
</script>

<style>


*,p{
  margin:0;
  padding: 0;
  box-sizing: border-box;
}

.form-post{
  width:400px;
  padding: 30px;
  margin: auto;
  margin-top: 60px;
  border-radius: 4px;
  font-family: 'Poppins', sans-serif;
  color: black;
}
.form-post h3{
  width: 300px;
  height: 25px;
  font-size: 14px;
  margin: 0 0 10px 0;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
}




.form-post label{
  height: 20px;
  text-align: center;
  font-size: 12px;
  line-height: 20px;
  margin-right: 30px;
}


.control{
  width: 220px;
  padding: 10px;
  border-radius: 4px;
  margin-right: 30px;
  margin-bottom: 5px;
  border: 1px solid gray;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 12px;
  text-align: left;

}
 button{
   width: 200px;
   margin-top: 10px;
   margin-right: 30px;
   padding: 10px;
   border-radius: 4px;
   border: none;
   background: #5640FF;
   font-family: 'Poppins',sans-serif;
   font-size: 16px;
   font-weight: bold;
   color: white;
   
 }

 .postula{
     
  position: fixed;
   background-image: url("../assets/mobile.png") ;
  line-height: 62px;
     
    right: 60px;
    top: 60px;
   z-index: 100;
 }

 .wsp img{
   width: 40px;
   height: 40px;
   position: fixed;
   bottom: 0px;
   right: 40px;
   z-index: 100;
 } 


</style>