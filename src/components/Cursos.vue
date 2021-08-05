<template>
  <div class="cursos">
    <p>Conoce nuestros Programas de Especialización</p>
    <div class="contenedorCursos">
      <div class="itemCurso" v-for="(curso, i) in cursos" :key="i">
        <!-- <img :src="`https://thawing-stream-82830.herokuapp.com/media/${curso.url}`" alt="" /> -->
        <img src="../assets/curso.png" alt="curso">
        <p>{{ curso.curso }}</p>
        <div>
          <button class="boton" @click="cargarMiCurso(curso)">+</button>
          <router-link class="link" :to="`/Curso/${curso.id}`"
            >Ver más</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Curso from "../views/Curso.vue";
import {mapActions} from 'vuex'
export default {
  Curso,
  data() {
    return {
      cursos: [],
      link:'https://thawing-stream-82830.herokuapp.com/media/02-digitacion-banners-una-por-curso-800x-185.jpg'
    };
  },
  methods: {
    ...mapActions(['sumarCursoAction','cargarCursosAction']),
    
    async getCursos() {
      
      const data = await fetch(
        // " http://localhost:3000/Cursos"
        "https://thawing-stream-82830.herokuapp.com/app/cursos/"
        );
      const info = await data.json();
      this.cursos = info; 
     console.log(this.cursos);

    },
    getUrl(dato){
      let array=[];
      dato.map(e=>{
        array.push(`https://thawing-stream-82830.herokuapp.com/media/${e.url}`);
      
      })
      return array;
    },
    
    cargarMiCurso(curso){
      this.sumarCursoAction();
      this.cargarCursosAction(curso);

    }
    // async postCursos() {
    //   const data = await fetch(
    //     "https://thawing-stream-82830.herokuapp.com/app/cursos/"
    //   );
    //   const info = await data.json();
    //   this.cursos = info;
      // console.log(this.cursos);
    // },
    
  },
  created() {
    this.getCursos();
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
}
.cursos {
  width: 1194px;
  padding-top: 80px;
  margin: 0 auto;
  font-size: 20px;
  font-family: poppins;
  font-weight: bold;
}
.cursos > p {
  text-align: left;
  font-weight: bold;
  color: #000425;
  margin-bottom: 32px;
}
.contenedorCursos {
  width: 720px;
  color: #f8f8fa;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.itemCurso {
  width: 343px;
  height: 320px;
  margin-bottom: 40px;
  position: relative;
}

.itemCurso img {
  width: 344px;
  height: 320px;
  filter: brightness(0.3);
}

.itemCurso p {
  position: absolute;
  bottom: 60px;
  left: 20px;
  margin-bottom: 0;
  display: flex;
  width: 170px;
  font-weight: 500;
  text-align: left;
}
.itemCurso div {
  position: absolute;
  bottom: 20px;
  right: 28px;
}
.itemCurso div .boton {
  width: 30px;
  height: 30px;
  margin: 0;
  padding: 0;
  border: 3px solid white;
  border-radius: 50%;
   background-color: transparent; 
  
} 
.boton:hover{
transition: 1s ;
  background: #4F95DA;
}
.link {
  color: #f8f8fa;
  font-size: 14px;
  font-weight: bold;
  margin-left: 10px;
}
</style>