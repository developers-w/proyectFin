<template>
  <div class="cursosComprados">
    <div class="curso" v-for="(c ,i) in cargarDatos " :key="i">
      <div class="image">
        <img :src="`https://thawing-stream-82830.herokuapp.com/media/${c.url}`" alt="" />
      </div>
      <div class="content">
        <div class="detalles">
        <p>{{c.curso}}</p>
        <p><span>Dto. {{c.duracion}}%</span></p>
        <a href="#" @click.prevent="eliminar(c.id)" >Eliminar</a>
      </div>
      <div class="costo">
        <p>{{c.precio}}</p>
      </div>
      </div>
    </div>
  </div>
</template> 

<script>
import {mapState,mapActions} from 'vuex';
export default {
  data() {
    return {
      cargarDatos:[],
      sumaPrecios:0.00,
      monto:0.00
    }
    
  },
  methods: {
    ...mapActions(['cargarSubtotalAction']),
      
  eliminar(id){
    const datos=[];
      this.datos = this.cargarDatos.filter(el=>{ 
        //  this.sumaPrecios=Number(this.sumaPrecios)- Number(el.precio);
              
        return el.id !== id   
    });
    this.cargarDatos=this.datos  
    this.subTotal();
    this.cargarSubtotalAction(this.sumaPrecios);
  },
  subTotal(){
    this.sumaPrecios=0; 
   this.cargarDatos.map(el=>{
     return this.sumaPrecios=Number(this.sumaPrecios)+Number(el.precio);
   });
    console.log(this.sumaPrecios);
  },
  cargar(){
      this.cargarDatos=this.cargarCursos;
      this.subTotal();
      this.cargarSubtotalAction(this.sumaPrecios);
      

    }
  },
  computed:{
    ...mapState(['cargarCursos'])
  },
  created() {
    this.cargar();
  },

};
</script>

<style scoped>

.cursosComprados .curso {
  width: 100%;
  max-width: 693px;
  height: 100px;
  display: flex;
  justify-content: flex-start;
  margin-right: 60px;
}
.curso{
  margin-bottom: 18px; 
}
.curso .image {
  width: 100%;
  max-width: 133px;
  height: 100px; 
  margin: 0;
  padding: 0;
  margin-right: 20px;
}
.image img {
  max-width: 100%;
  height: auto;
}
.curso .detalles {
  height: 100px;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: left;
}
.curso .content{
  width: 100%;
  max-width: 560px;
  display: flex;
  justify-content: space-between;

}
.detalles p{
  font-family: Roboto;
  font-size: 16px;
  font-weight: bold;
}
.detalles p  span{  
  font-size: 14px;
  font-weight: bold;
  color: #5640ff;
}
.detalles a{
  font-family: Popins ;
  font-size: 12px;
  font-weight: bold;
  color:#5640ff;
}
</style>