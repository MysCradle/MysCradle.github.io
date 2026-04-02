
import DefaultLayer from '@/DefaultLayer.vue'
import Galeria from '@/Pages/Galeria.vue'
import Home from '@/Pages/Home.vue'
import Jinseidle from '@/Pages/Jinseidle.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: DefaultLayer,
      children: [
        {path: '', component: Home},
        {path: 'jinseidle', component: Jinseidle},
        {path: 'Galeria', component: Galeria}
      ]
    }
  ],
})

export default router
