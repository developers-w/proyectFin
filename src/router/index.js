import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Curso from'../views/Curso.vue'
import MisCompras from '../views/MisCompras.vue'
import Pasarela from '../views/Pasarela.vue'
import Consolidado from '../views/Consolidado.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Curso/:id',
    name: 'Curso',
    component: Curso
  },
  {
    path:'/MisCompras',
    name:'MisCompras',
    component:MisCompras
  },
  {
    path:'/MisCompras/Pasarela',
    name:'Pasarela',
    component:Pasarela
  },
  {
    path:'/MisCompras/Pasarela/Consolidado',
    name:'Consolidado',
    component:Consolidado
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
