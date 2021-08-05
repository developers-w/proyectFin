<template>
  <h1>soy cursos {{ $route.params.id }}</h1>
  <PlanEstud/>
</template>

<script>
import PlanEstud from '../components/PlanEstud.vue'
export default {
  name:'Curso',
  components:{
    PlanEstud

  },

  data() {
    return {
      
    }
  },
};
</script>


<style>
</style>