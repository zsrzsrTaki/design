import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/page/home'
import Seat from '@/components/page/seat'
import Menu from '@/components/page/Menu'
import My from '@/components/page/my'
import Info from '@/components/page/info'
import Page from '@/components/page/page'
import Register from '@/components/page/register'
import Login from '@/components/page/login'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
    	path:'/home',
    	name:'home',
    	component:Home
    },
    {
    	path:'/seat',
    	name:'seat',
    	component:Seat
    },
    {
    	path:'/menu',
    	name:'Menu',
    	component:Menu
    },
    {
      path:'/my',
      name:'My',
      component:My
    },
    {
      path:'/info',
      name:'Info',
      component:Info
    },
    {
      path:'/page/:id',
      name:'Page',
      component:Page
    },
    {
      path:'/register',
      name:'Register',
      component:Register
    },
     {
      path:'/login',
      name:'login',
      component:Login
    },
  ]
})
