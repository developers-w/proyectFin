<template>
  <div class="fondo">
    <!-- <img src="../assets/portada.png" alt="fondo"> -->
    <div class="safe">
      <div class="portada">
        <div>
          <div class="texto">
            <h1>
              ¡Explota todo tu potencial <br />
              tecnológico!
            </h1>
            <p>Con nuestros programas de especialización</p>
          </div>
        </div>
      </div>
      <div class="logo2">
        <img src="../assets/logo2.png" alt="" />
        <img class="flecha" src="../assets/flechaAbajo.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
.fondo {
  width: 100%;
  min-height: 100vh;
  background-image: url("../assets/portada.png");
  margin: 0;
  background-size: 100% 500px;
  background-repeat: no-repeat;
}
.safe {
  width: 1194px;
  min-height: 100vh;
  margin: 0 auto;
  font-family: Poppins;
}
.portada {
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.portada div {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

div .texto {
  width: 60%;
  height: 216px;
  font-size: 22pt;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 80px;
}

.texto p {
  font-weight: 500;
  font-size: 20px;
}
.texto h1 {
  margin: 0;
  font-size: 54px;
  font-weight: bold;
}
.logo2 {
  display: flex;
  justify-content: flex-start;
  width: 570px;
  height: 160px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: center;
}
.logo2 img {
  max-width: 100%;
}
.logo2 .flecha {
  width: 50px;
  height: 50px;
}
</style>