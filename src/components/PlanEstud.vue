<template>


<h1>Plan de Estudios</h1>
<div class="acordeon">
    <div :class="m.open ? 'open':'' " v-for="(m,i) in modulos" :key="i"  @click="()=>toggleOpen(i)">
      <div class="modulo">
       <h2>Modulo {{m.id}}</h2>
    </div>
    <div class="semana"  >
      <div  :class="s.actived ? 'actived':'' " v-for="(s,j) in m.semana" :key="j"  @click="()=>toggleOpen2(j,m.semana)" >
             <h2>Semana {{s.id}}</h2>
            <div class="detalles"  >
                <h3>Descripcion</h3>
                <p>{{s.tema}}</p>
            </div>
      </div>
     
      
    </div>
    </div>
  </div>
  
</template>

<script>
export default {
  data() {
    return {
     modulos:[],
     actived:false
    

    }
  },
  computed:{
    
   
  },
  
  methods:{
    async getModulos() {     
      const data = await fetch("");
      const info = await data.json();
      this.modulos = info;
     console.log(this.modulos);

    },

    toggleOpen(index){
      this.modulos.map((el,i)=>{
        if(el.open===true){
          el.open=false
          console.log(el.id);
        }
        if(index===i){
          el.open = !el.open;
           return el
        }




      })

    },
    toggleOpen2(index,array){
      
      array.map((el,i)=>{
        if(el.actived===true){
          el.actived=false
          console.log(el.id);
        }
        if(index===i){
          el.actived = !el.actived;
           return el
        }




      })

    }
  
  },
  created() {
    // this.getModulos()  
  },

};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Raleway", sans-serif;
}


.acordeon{
  display: block;
  width: 100%;
  max-width: 500px;
  margin: 10px auto;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0 0 0 0.4);
  background-color: #fff;
}
.acordeon .modulo{
  position: relative;
  margin: 5px;
  color: #3c3c3c;
  padding: 10px;
  font-size: 18px;
  transition: all 0.4 linear;
}
.acordeon .open .modulo{
  /* margin-top: 100px; */
}
.acordeon .open .modulo::after{
  transform: translateY(-50%) rotate(180deg);
}
.acordeon .modulo::after{
  content:'';
  position: absolute;
  top:  50%;
  right: 0;
  transform: translateY(-50%) rotate(0deg);
  width: 30px;
  height: 30px;
  transition: all 0.4 linear;

}
.acordeon .semana{
  margin: 0 25px;
  color: #3c3c3c;
  font-size: 14px;
  opacity: 0;
  max-height: 0;
  overflow-y: hidden;
  transition: all 0.4 ease-out;

  /* display: inline-block; */
  margin-right: 20px;
}

.acordeon .open .semana{
  opacity: 1;
  max-height: 200px;
}
 .detalles{
  opacity: 0;
  max-height: 0;
  overflow-y: hidden;
  transition: all 0.4 ease-out;
  
}
.actived .detalles{
  opacity: 1;
  max-height: 100px;

}




</style>
