import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Friends from '../views/Friends.vue'
import Prywatnosc from '../views/Prywatnosc.vue'
import Kontakt from '../views/Kontakt.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Upload from '@/views/Upload.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/Friends',
      name: 'Friends',
      component: Friends
      
    },
    {
      path: '/polityka-prywatnosci',
      name: 'Prywatnosc',
      component: Prywatnosc
    },
    {
      path: '/kontakt',
      name: 'Kontakt',
      component: Kontakt
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/upload',
      name: 'Upload',
      component: Upload
    }

    
  ]
})

export default router;
