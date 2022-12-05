import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
	{
	  path: '/',
   name: 'Home',
   component: () => import('../views/Home.vue')
	},
	{
	  path: '/exchange',
   name: 'Exchange',
   component: () => import('../views/Exchange.vue')
	},
	{
	  path: '/project',
   name: 'Project',
   component: () => import('../views/project.vue')
	}
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
