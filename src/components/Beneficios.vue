<template>
  <div class="textoComunidad">
    <div class="mujer">
      <img src="../assets/mujer.png" alt="" />
    </div>
    <div class="texto2">
      <img src="../assets/texto2.png" alt="" />
    </div>
  </div>
  <div class="contenedorBeneficios">
    <h2>Beneficios</h2>
    <div class="beneficios" v-for="(beneficio, i) in beneficios" :key="i">
      <img src="../assets/personas.png" alt="" />
      <div class="textoBeneficio">
        <p>{{ beneficio.title }}</p>
        <p class="texto">{{ beneficio.texto }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      beneficios: [],
    };
  },
  methods: {
    async getBeneficios() {
      const data = await fetch(
        "https://thawing-stream-82830.herokuapp.com/app/beneficios/"
      );
      const info = await data.json();
      this.beneficios = info;
      console.log(this.beneficios);
    },
  },
  created() {
    this.getBeneficios();
  },
};
</script>

<style scopeed>
.textoComunidad {
  background-color: #5640ff;
  width: 100%;
  height: 282px;
  margin-top: 159px;
  display: flex;
  justify-content: flex-start;
}
.mujer img {
  width: 323px;
  height: 419px;
  margin-left: -100px;
  margin-top: -90px;
}
.texto2 img {
  margin-top: 60px;
}
.contenedorBeneficios {
  width: 1194px;
  font-family: Poppins;
  color: #222222;
  margin: 0 auto;
  margin-top: 138px;
}

.contenedorBeneficios h2 {
  text-align: left;
  margin-bottom: 32px;
  font-weight: bold;
  font-size: 20;
}
.beneficios {
  width: 718px;
  height: 160px;
  font-size: 14px;
  background-color: #f8f8fa;
  border-radius: 15px;
  display: flex;
  flex-wrap: wrap;

  margin-bottom: 30px;
}
.beneficios img {
  width: 50px;
  height: 50px;
  margin: 50px 40px 50px 40px;
}
.textoBeneficio {
  width: 538px;
  height: 57px;
  margin: 30px 0 0 30px;
  text-align: left;
}
.textoBeneficio p {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 22px;
}
.textoBeneficio .texto {
  font-family: Roboto;
  font-size: 14px;
  font-weight: 300;
}
</style>