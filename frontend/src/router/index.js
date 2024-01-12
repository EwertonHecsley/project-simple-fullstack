import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CadastroView from '../views/CadastroView.vue';
import AreaLogadaVue from '@/views/AreaLogada.vue';
import NaoLogadoVue from '@/views/NaoLogado.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/cadastro',
      name: 'cadastro',
      component: CadastroView
    },
    {
      path: '/logado',
      name: 'logado',
      component: AreaLogadaVue
    },
    {
      path: '/naoLogado',
      name: 'naoLogado',
      component: NaoLogadoVue
    }
  ]
})

export default router
