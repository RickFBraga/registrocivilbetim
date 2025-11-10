import FooterComponent from '@/components/FooterComponent.vue'
import BirthPage from '@/views/BirthPage.vue'
import DeathPage from '@/views/DeathPage.vue'
import HomePage from '@/views/HomePage.vue'
import MarriedPage from '@/views/MarriedPage.vue'
import SecondCopyPage from '@/views/SecondCopyPage.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/'
    },
    {
      path: '/home',
      name: 'home',
      component: HomePage
    },
    {
      path: '/casamento',
      name: 'casamento',
      component: MarriedPage
    },
    {
      path: '/segunda-via',
      name: 'segunda-via',
      component: SecondCopyPage
    },
    {
      path: '/nascimento',
      name: 'nascimento',
      component: BirthPage
    },
    {
      path: '/obito',
      name: 'obito',
      component: DeathPage
    },
    {
      path: '/contato',
      name: 'contato',
      component: FooterComponent,
      meta: { hideFooter: true }
    }
  ]
})

export default router
