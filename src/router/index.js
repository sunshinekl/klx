import Vue from 'vue'
import Router from 'vue-router'

let Index = () => import("@/pages/Index");
let Login = () => import("@/pages/Login");
let Detail = () => import("@/pages/Detail");
let Shopcar = () => import("@/pages/Shopcar");


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Index
    },
    {
      path: '/Detail',
      component: Detail
    },
    {
      path: '/Login',
      component: Login
    },
    {
      path: '/Shopcar',
      component: Shopcar
    }
  ]
})