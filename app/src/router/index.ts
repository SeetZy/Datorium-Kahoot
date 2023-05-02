/**
 ** Library imports
 */
// ? https://www.npmjs.com/package/vue-router
import { createRouter, createWebHistory } from 'vue-router'

/**
 * * Page imports
 */
import Home from '../views/Home.vue'
import Results from '../views/Results.vue'

const routes: any = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/results',
    name: 'Results',
    component: Results,
  },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
