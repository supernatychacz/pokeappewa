import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        layout: "guest",
        needsAuth: false
      }
    },
    {
      path: '/signup',
      name: 'signup',
      // route level code-splitting
      // this generates a separate chunk (Signup.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/SignupView.vue'),
      meta: {
        layout: "guest",
        needsAuth: false
      }
    },
    {
      path: '/pokemons',
      name: 'pokemons',
      component: () => import('../views/PokemonsView.vue'),
      meta:{
        layout: "auth",
        needsAuth: true
      }
    },
    {
      path: '/pokemons/:name',
      name: 'pokemon',
      component: () => import('../views/PokemonView.vue'),
      meta:{
        layout: "auth",
        needsAuth: true
      }
    },
    {
      path: "/:catchAll(.*)",
      name: 'not-found',
      component: () => import('../views/errors/404.vue'),
    }
  ]
})


router.beforeEach((to, from, next) => {
  // code to add auth middleware for routes
  next()
})

export default router
