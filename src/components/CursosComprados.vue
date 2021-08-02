<template>
  <div class="cursosComprados">
    <div class="curso">
      <div class="image">
        <img src="" alt="" />
      </div>
      <div class="detalles">
        <p>estion de envaces y encaesde y dedada</p>
        <p>.s/ 234.56</p>
        <a href="#">Eliminar</a>
      </div>
      <div class="costo">
        <p>.s/234.56</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.cursosComprados .curso {
  max-width: 693px;
  height: 100px;
  display: flex;
  justify-content: space-between;
  margin-right: 60px;
}
.curso .image {
  width: 133px;
  margin: 0;
  padding: 0;
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
</style>