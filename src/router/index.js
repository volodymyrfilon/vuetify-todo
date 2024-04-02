import Vue from 'vue'
import VueRouter from 'vue-router'
import goTo from 'vuetify/lib/services/goto'
import Todo from '../views/Todo.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'Todo',
		component: Todo,
	},
	{
		path: '/about',
		name: 'About',
		component: () => import('../views/About.vue'),
	},
]

const router = new VueRouter({
	routes,
})

router.beforeEach((to, from, next) => {
	document.title = `${process.env.VUE_APP_TITLE} - ${to.name}`
	next()
})

router.afterEach((to, from) => {
	goTo(0, { duration: 0 })
})

export default router
