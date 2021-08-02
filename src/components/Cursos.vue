<template>
  <div class="cursos">
    <p>Conoce nuestros Programas de Especialización</p>
    <div class="contenedorCursos">
      <div class="itemCurso" v-for="(curso, i) in cursos" :key="i">
        <img src="../assets/curso.png" alt="" />

        <p>{{ curso.curso }}</p>
        <div>
          <button @click="contador">+</button>
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
export default {
  Curso,
  data() {
    return {
      cursos: [],
    };
  },
  methods: {
    async getCursos() {
      const data = await fetch(
        "https://thawing-stream-82830.herokuapp.com/app/cursos/"
      );
      const info = await data.json();
      this.cursos = info;
      console.log(this.cursos);
    },
    async postCursos() {
      const data = await fetch(
        "https://thawing-stream-82830.herokuapp.com/app/cursos/"
      );
      const info = await data.json();
      this.cursos = info;
      console.log(this.cursos);
    },
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
  width: 100%;
  filter: brightness(0.7);
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
.itemCurso div button {
  width: 20px;
  height: 20px;
  color: #f8f8fa;
  border: 3px solid white;
  border-radius: 50%;
  background-color: transparent;
}
.link {
  color: #f8f8fa;
  font-size: 14px;
  font-weight: bold;
  margin-left: 10px;
}
</style>