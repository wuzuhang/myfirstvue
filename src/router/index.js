import Vue from 'vue'
import Router from 'vue-router'
import menu from '../components/tabbar/menu'
import car from '../components/tabbar/car'
import search from '../components/tabbar/search'
import vip from '../components/tabbar/vip'
import news from '../components/new/new'
import newinto from '../components/new/newinto'

Vue.use(Router);

export default new Router({
  routes: [
    {path:'/',redirect:'/menu'},
    {path:'/menu',component:menu},
    {path:'/cart',component:car},
    {path:'/search',component:search},
    {path:'/vip',component:vip},
    {path:'/menu/newsuccess',component:news},
    {path:'/menu/newinto/:id',component:newinto}
  ],
  linkActiveClass:'mui-active'
})
