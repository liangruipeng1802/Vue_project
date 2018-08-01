import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home/index.vue'
import HomeHeader from '@/components/Home/Header/index.vue'

import Kind from '@/components/Kind/index.vue'
import KindHeader from '@/components/Kind/Header/index.vue'

import Cart from '@/components/Cart/index.vue'
import CartHeader from '@/components/Cart/Header/index.vue'

import User from '@/components/User/index.vue'
import UserHeader from '@/components/User/Header/index.vue'

import Detail from '@/components/Detail/index.vue'
import DetailHeader from '@/components/Detail/Header/index.vue'

import MainFooter from '@/components/MainFooter/index.vue'
Vue.use(Router)
const routes=[
	{
		path:'/',
		redirect:'/home'
	},
	{
	  path: '/home',
	  components:{
	  	header:HomeHeader,
	  	content:Home,
	  	footer:MainFooter
	  }
	},
	{	  
		path: '/kind',
	  	components:{
	  	header:KindHeader,
	  	content:Kind,
	  	footer:MainFooter
	  }
	},
	{
	  path: '/cart',
	  components:{
	  	header:CartHeader,
	  	content:Cart,
	  	footer:MainFooter
	  }
	},
	{
	  path: '/user',
	  components:{
	  	header:UserHeader,
	  	content:User,
	  	footer:MainFooter
	  }
	},
	{
	  path: '/detail',
	  components:{
	  	header:DetailHeader,
	  	content:Detail,
	  }
	}
	
]
const router=new Router({
	routes
})

export default router