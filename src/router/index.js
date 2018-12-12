import Vue from 'vue'
import Router from 'vue-router'
import menu from '../components/tabbar/menu'
import car from '../components/tabbar/car'
import search from '../components/tabbar/search'
import vip from '../components/tabbar/vip'

Vue.use(Router);

export default new Router({
  routes: [
    {path:'/',redirect:'/menu'},
    {path:'/menu',component:menu},
    {path:'/cart',component:car},
    {path:'/search',component:search},
    {path:'/vip',component:vip},
  ],
  linkActiveClass:'mui-active'
})
