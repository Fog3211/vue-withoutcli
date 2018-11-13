import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Home from '@/components/home'
import Foo from '@/components/Foo'
import Bar from '@/components/Bar'
let routers = [{
		path: '/home',
		name: 'Home',
		component: Home
	},
	{
		path: '/foo',
		name: 'Foo',
		component: Foo
	},
	{
		path: '/bar',
		name: 'Bar',
		component: Bar
	},
	{
		path: '/',
		name: '',
		component: Home
	}
]

export default new Router({
	routes: routers
})