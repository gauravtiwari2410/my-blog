import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ComputedView from '../views/ComputedView.vue'


const routes = [

  {
  path: '/',
  name: 'HomeView',
  component: Home
}
  // {
  //   path: '/',
  //   name: 'compute',
  //   component: ComputedView
  // },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
