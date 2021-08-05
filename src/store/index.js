import { createStore } from 'vuex'

export default createStore({
  state: {
    sumarCursos:0,
    cargarCursos:[],
    subtotal:100
  
  },
  mutations: {
    sumarCursoMutation(state,payload){
     state.sumarCursos+=1
  
    },
    cargarCursosMutation(state,payload){
      state.cargarCursos.push(payload);
      console.log(state.cargarCursos);
    },
    cargarSubtotalMutation(state,payload){
    state.subtotal=Number(payload);
    }

  },
  actions: {
    sumarCursoAction({commit}){
      commit('sumarCursoMutation');
    },
    cargarCursosAction({commit},cursos){
      commit('cargarCursosMutation',cursos)
    },
    cargarSubtotalAction({commit},subtotal){
      commit('cargarSubtotalMutation',subtotal)
    }
  },
  modules: {
  }
})
